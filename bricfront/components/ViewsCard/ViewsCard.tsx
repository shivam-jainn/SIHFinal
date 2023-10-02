import React from 'react'
import { Text, Paper } from '@mantine/core';

import { SegmentedControl } from '@mantine/core';
import StatDashBoard from '../StatDashBoard/StatDashBoard';


function SegmentedControlViews() {
  return <SegmentedControl color="violet" data={['React', 'Angular', 'Vue', 'Svelte']} />;
}

export default function ViewsCard() {
  return (
    
    <Paper shadow="sm" withBorder p="xl">
        <SegmentedControlViews />
        <StatDashBoard />
    </Paper>
  )
}



