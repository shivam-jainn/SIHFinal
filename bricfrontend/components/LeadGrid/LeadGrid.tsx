import React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

import MachineStatus from '../MachineStatus/MachineStatus';
import ConcreteHumidityMonitor from '../ConcreteHumidity/ConcreteHumidity';
import WorkerEntranceTracker from '../WorkerEnteranceTracker/WorkerEnteranceTracker';
import { StatsControls } from '../StatsControls/StatsControls';
import { StatsGridIcons } from '../StatsGridIcons/StatsGridIcons';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} - var(--mantine-spacing-md) / 2)`;

  const machineData = [
    { name: 'Machine A', status: 'running' },
    { name: 'Machine B', status: 'idle' },
    // ... and so on
  ];
  

  return (
    <Container my="md">
          <StatsControls />
          <StatsGridIcons />

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      <Grid gutter="md">
          <Grid.Col>

          <ConcreteHumidityMonitor humidityPercentage={75.5} />
                      
          </Grid.Col>
          <Grid.Col >

            

          </Grid.Col>
        
        </Grid>

        <Grid gutter="md">
          <Grid.Col>



          
          </Grid.Col>
          <Grid.Col span={6}>
          <MachineStatus machineData={machineData} />

          
          </Grid.Col>
          <Grid.Col span={6}>
          <WorkerEntranceTracker workerCount={23} />

          
          </Grid.Col>
        </Grid>


      </SimpleGrid>
    </Container>
  );
}