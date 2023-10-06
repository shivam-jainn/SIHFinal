import { Button, Grid, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import ViewDetails from '../ViewDetails/ViewDetails';
export default  function ViewTab() {
    const [opened, { open, close }] = useDisclosure(false);
    const GridStyles = { backgroundColor:"#88C2F3", border:"1px black solid", height:200}
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col onClick={open} span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Modal opened={opened} onClose={close} title="Modal Name" centered size="calc(100vw - 3rem)" >
        <ViewDetails/>
      </Modal>
  </Grid>
  );
}