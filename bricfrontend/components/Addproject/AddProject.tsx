import React from 'react';
import { PinInput, Box, Text, Paper, Button } from '@mantine/core';

export default function AddProject() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically on the screen
      }}
    >

        <Paper shadow="xs" withBorder p="xl" style={{maxWidth:'600px'}}>
      <Text size="4rem" fw={1000} style={{  textAlign: 'left' }}>
        One brick at a time. Join your next project by entering the code.
      </Text>
      
      <Paper withBorder style={{padding:'1rem',display:'flex',justifyContent:'space-between',marginTop:'2rem'}}>

      <PinInput size="xl" length={6} aria-label="One time code" oneTimeCode style={{ alignSelf: 'flex-start', marginLeft: 0 }} />
      <Button style={{height:'auto'}} >Add</Button>
      </Paper>

        </Paper>
    </Box>
  );
}
