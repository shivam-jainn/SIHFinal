import React from 'react';
import { Card, Text, Badge } from '@mantine/core';

function WorkerEntranceTracker({ workerCount, siteStatus }) {
  // Determine the color of the badge based on the site status
  const badgeColor = siteStatus === 'Open' ? 'green' : 'red';

  return (
    // use BadgeColor instead of current color later on
    <Card shadow="xs" padding="md" style={{ textAlign: 'center' }}>
      <h3 style={{ textDecoration: 'underline' }}>Site Status</h3>
      <Text size="lg">Workers on Site:</Text>
      <Text size="xl" weight={700} style={{ color: 'green' }}>
        {workerCount}
      </Text>
      <Badge color={'green'} style={{ marginTop: '1rem' }}>
        {siteStatus}
      </Badge>
    </Card>
  );
}

export default WorkerEntranceTracker;
