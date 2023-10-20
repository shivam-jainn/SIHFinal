import React from 'react';
import { Card, Text, Progress } from '@mantine/core';

function ConcreteHumidityMonitor({ humidityPercentage }) {
  return (
    <Card shadow="xs" padding="md">
      <h3>Concrete Humidity Monitor</h3>
      <Text size="lg">Humidity Level:</Text>
      <Progress
        value={humidityPercentage}
        size="lg"
/>
    </Card>
  );
}

export default ConcreteHumidityMonitor;
