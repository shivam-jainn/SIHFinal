"use client"
import React from 'react';
import { Tabs } from '@mantine/core';


export default function ViewsTabs({views}) {
  return (
    <Tabs defaultValue="Overview">
    <Tabs.List>
      <Tabs.Tab value="Overview">Overview</Tabs.Tab>
      <Tabs.Tab value="Issues">Issues</Tabs.Tab>
      <Tabs.Tab value="Quality">Quality</Tabs.Tab>
      <Tabs.Tab value="Add" ml="auto">
        Add
      </Tabs.Tab>
    </Tabs.List>
  </Tabs>
  )
}
