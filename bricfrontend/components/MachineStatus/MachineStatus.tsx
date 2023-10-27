import React from 'react';
import { Card, Text, Badge, Divider } from '@mantine/core';

function MachineStatus({ machineData }) {
  return (
    <Card shadow="xs" padding="md" style={{ textAlign: 'center' }}>
      <h3 style={{ textDecoration: 'underline' }}>Machine Status</h3>
      {machineData.map((machine, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <Text size="lg" weight={700}>
            {machine.name}
          </Text>
          <Badge color={machine.status === 'running' ? 'green' : 'red'} style={{ marginTop: '0.5rem' }}>
            {machine.status}
          </Badge>
        </div>
      ))}
    </Card>
  );
}

export default MachineStatus;
