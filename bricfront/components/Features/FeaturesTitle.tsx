"use client"
import React from 'react';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Real-time Monitoring',
    description: 'Continuous tracking of machine status, personnel activities, and material usage with live updates.',
  },
  {
    icon: IconFlame,
    title: 'Plug and Play',
    description:
      'Easy to plug IOT devices into the system for real-time monitoring and tracking of data according to your project requirements.',
  },
  {
    icon: IconFileCode,
    title: 'Machine Health Dashboard',
    description: 'Comprehensive insights into the condition of machines, including performance metrics, maintenance history, and alerts for issues.',
  },
  {
    icon: IconCircleDotted,
    title: 'Personnel Management',
    description:
      'User profiles, roles, certifications, and activity logs for managing and tracking personnel effectively.',
  },
  {
    icon: IconFlame,
    title: 'Materials Inventory',
    description:
      'Inventory management tools for monitoring stock levels, tracking material consumption, and generating reorder alerts.',
  },
  {
    icon: IconFlame,
    title: 'Forecasting with Alerts',
    description:
      'Predictive analytics to forecast machine maintenance needs, personnel scheduling, and material requirements.',
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          Track & manage in real time. Emphasizing data security and scalability.
          </Title>
          <Text c="dimmed">
          Foundation of a comprehensive system for tracking and managing machines, personnel, and materials effectively, depending on the project's scope and requirements.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}