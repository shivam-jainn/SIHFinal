import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export function SampleData() {
    const [machineStats, setMachineStats] = useState({
        Machine_ID: '',
        Timestamp: '',
        Machine_Temperature_C: 0,
        Soundwave_dB: 0,
        Vibration_mm_s2: 0,
        Environment_Temperature_C: 0,
        Humidity: 0,
    });

    useEffect(() => {
        // Fetch data from data.json
        fetch('/data.json') // Adjust the path as needed
            .then((response) => response.json())
            .then((data) => {
                setMachineStats(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        const socket = io('http://localhost:3001'); // Adjust the URL to match your server

        socket.on('machine-stats', (data) => {
            setMachineStats(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

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
        </div>
    );
}
