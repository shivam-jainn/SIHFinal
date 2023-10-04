import React from 'react'
import { Text, Paper } from '@mantine/core';

import { SegmentedControl } from '@mantine/core';
import StatDashBoard from '../StatDashBoard/StatDashBoard';


function SegmentedControlViews() {
  return <SegmentedControl color="violet" data={['Default View', 'Manager View',  'Prestige View']} />;
}

export default function ViewsCard() {
  return (
    
    <Paper shadow="sm" withBorder p="xl">
        <SegmentedControlViews />
        <StatDashBoard />
    </Paper>
  )
}



