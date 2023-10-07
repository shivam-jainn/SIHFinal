import React from 'react';
import { Card, Text } from '@mantine/core';

function WorkerEntranceTracker({ workerCount }) {
  return (
    <Card shadow="xs" padding="md">
      <h3>Worker Entrance Tracker</h3>
      <Text size="lg">Workers on Site:</Text>
      <Text size="xl">{workerCount}</Text>
    </Card>
  );
}

export default WorkerEntranceTracker;
