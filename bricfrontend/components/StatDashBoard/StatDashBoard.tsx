import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Line } from 'react-chartjs-2';

// Define an interface for the data structure
interface MachineData {
    Machine_ID: string;
    Timestamp: string;
    Machine_Temperature_C: number;
    Soundwave_dB: number;
    Vibration_mm_s2: number;
    Environment_Temperature_C: number;
    Humidity: number;
}

export default function StatDashBoard() {
    const [machineStats, setMachineStats] = useState<MachineData>({
        Machine_ID: '',
        Timestamp: '',
        Machine_Temperature_C: 0,
        Soundwave_dB: 0,
        Vibration_mm_s2: 0,
        Environment_Temperature_C: 0,
        Humidity: 0,
    });

    const [temperatureData, setTemperatureData] = useState<number[]>([]);
    const [timestamps, setTimestamps] = useState<string[]>([]);

    useEffect(() => {
        // Function to update data and add it to the chart
        const updateData = (data: MachineData) => {
            setMachineStats(data);

            // Update temperature data and timestamps for the chart
            setTemperatureData((prevData) => [...prevData, data.Machine_Temperature_C]);
            setTimestamps((prevTimestamps) => [...prevTimestamps, data.Timestamp]);
        };

        // Fetch data from data.json (for initial data)
        fetch('/data.json') // Adjust the path as needed
            .then((response) => response.json())
            .then((data: MachineData) => {
                updateData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        const socket = io('http://localhost:3000'); // Adjust the URL to match your server

        socket.on('machine-stats', (data: MachineData) => {
            updateData(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: 'Machine Temperature (°C)',
                data: temperatureData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            },
        ],
    };

    return (
        <div>
            <h1>Machine Statistics</h1>
            <ul>
                <li>Machine ID: {machineStats.Machine_ID}</li>
                <li>Timestamp: {machineStats.Timestamp}</li>
                <li>Machine Temperature: {machineStats.Machine_Temperature_C} °C</li>
                <li>Soundwave dB: {machineStats.Soundwave_dB}</li>
                <li>Vibration mm/s^2: {machineStats.Vibration_mm_s2}</li>
                <li>Environment Temperature: {machineStats.Environment_Temperature_C} °C</li>
                <li>Humidity: {machineStats.Humidity}%</li>
            </ul>
            <div>
                <Line data={chartData} />
            </div>
        </div>
    );
}
