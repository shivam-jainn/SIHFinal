import { Button, Grid, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
export default  function ViewTab() {
    const GridStyles = { backgroundColor:"#88C2F3", border:"1px black solid", height:200}
  return (
    <div style={{margin:'20px 10px'}}>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
    <Grid.Col   span={4}><div style={GridStyles}> widget </div></Grid.Col>
    
    <Grid.Col span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    
  </Grid>
    </div>
  );
}