"use client"
import React from 'react';
import { Tabs } from '@mantine/core';


export default function ViewsTabs() {
  return (
    <Tabs defaultValue="chat">
    <Tabs.List>
      <Tabs.Tab value="chat">Chat</Tabs.Tab>
      <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
      <Tabs.Tab value="settings">Settings</Tabs.Tab>
      <Tabs.Tab value="account" ml="auto">
        Account
      </Tabs.Tab>
    </Tabs.List>
  </Tabs>
  )
}
