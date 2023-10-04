import React from 'react';
import { Container, Text, Button, Group } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A real-time dashboard by{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            BricBoard
          </Text>{' '}
          for your next project.
        </h1>

        <Text className={classes.description}>
        Get a real-time dashboard for monitoring machine health, personnel data, and material information.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

        
        </Group>
      </Container>
    </div>
  );
}