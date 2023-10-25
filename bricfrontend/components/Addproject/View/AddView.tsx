import React from 'react';
import { PinInput, Box, Text, Paper, Button } from '@mantine/core';
import SharedMakeView from '@/components/SharedMakeView/SharedMakeView';

export default function AddView() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
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
        One View at a time. Add your next view by entering the code.
      </Text>
      
      <Paper withBorder style={{padding:'1rem',display:'flex',justifyContent:'space-between',marginTop:'2rem'}}>

      <PinInput size="xl" length={6} aria-label="One time code" oneTimeCode style={{ alignSelf: 'flex-start', marginLeft: 0 }} />
      <Button style={{height:'auto'}} >Add</Button>
      </Paper>

        </Paper>
    </Box>

      <h1 style={{textAlign:'center'}}>OR</h1>

    <Box>
      <SharedMakeView />
    </Box>
    </div>
  );
}
