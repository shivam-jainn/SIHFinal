import React from 'react';
import { Card, Text } from '@mantine/core';

function MachineStatus({ machineData }) {
  return (
    <Card shadow="xs" padding="md">
      <h3>Machine Status </h3>
      {machineData.map((machine, index) => (
        <div key={index}>
          <Text size="lg">{machine.name}</Text>
          <Text color={machine.status === 'running' ? 'green' : 'red'} size="sm">
            Status: {machine.status}
          </Text>
        </div>
      ))}
    </Card>
  );
}

export default MachineStatus;
