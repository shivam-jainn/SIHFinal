import SharedMakeView from '@/components/SharedMakeView/SharedMakeView';
import { Box, Button, Paper, PinInput, Text } from '@mantine/core';
import React from 'react';

export default function AddView() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '50vh',
        marginTop: "2%"
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

      <h1 style={{textAlign:'center', margin:"2% 0"}}>OR</h1>

    <Box>
      <SharedMakeView />
    </Box>
    </div>
  );
}
