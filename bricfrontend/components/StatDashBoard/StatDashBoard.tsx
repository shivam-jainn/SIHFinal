import React, { useEffect, useState } from 'react';

type MachineStats = {
    Machine_ID: string;
    Timestamp: string;
    Machine_Temperature_C: number;
    Soundwave_dB: number;
    Vibration_mm_s2: number;
    Environment_Temperature_C: number;
    Humidity: number;
};

const Dash: React.FC = () => {
    const [machineStats, setMachineStats] = useState<MachineStats[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Assuming the JSON file is in your public directory
                const data: MachineStats[] = await response.json();
                setMachineStats(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Set up an interval to refresh data every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % machineStats.length);
        }, 5000);

        // Fetch data initially and clear the interval when the component unmounts
        fetchData();

        return () => {
            clearInterval(interval);
        };
    }, [machineStats]);

    return (
        <div>
            <h1>Machine Statistics</h1>
            {machineStats.length > 0 && (
                <ul>
                    <li>Machine ID: {machineStats[currentIndex].Machine_ID}</li>
                    <li>Timestamp: {machineStats[currentIndex].Timestamp}</li>
                    <li>Temperature: {machineStats[currentIndex].Machine_Temperature_C} °C</li>
                    <li>Sound Waves: {machineStats[currentIndex].Soundwave_dB}</li>
                    <li>Vibration: {machineStats[currentIndex].Vibration_mm_s2}</li>
                    <li>Environment Temperature: {machineStats[currentIndex].Environment_Temperature_C} °C</li>
                    <li>Humidity: {machineStats[currentIndex].Humidity}%</li>
                </ul>
            )}
        </div>
    );
};

export default Dash;
