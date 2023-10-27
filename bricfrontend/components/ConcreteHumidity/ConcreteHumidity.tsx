import React from 'react';
import { Card, Text, Progress, Badge } from '@mantine/core';

function ConcreteHumidityMonitor({ humidityPercentage }) {
  // Determine the badge color based on humidity level
  const badgeColor =
    humidityPercentage >= 70
      ? 'red' // High humidity, indicating a potential issue
      : humidityPercentage >= 40
      ? 'yellow' // Moderate humidity
      : 'green'; // Low humidity, indicating ideal conditions

  return (
    <Card shadow="xs" padding="md" style={{ textAlign: 'center' }}>
      <h3 style={{ textDecoration: 'underline' }}>Concrete Humidity Monitor</h3>
      <Text size="lg" weight={700}>
        Humidity Level:
      </Text>
      <Progress
        value={humidityPercentage}
        size="lg"
        style={{ marginBottom: '1rem' }}
      />
      <Badge color={badgeColor} style={{ marginTop: '0.5rem' }}>
        {humidityPercentage}% Relative Humidity
      </Badge>
    </Card>
  );
}

export default ConcreteHumidityMonitor;
