import { Button, Grid, Modal } from '@mantine/core';
import React from 'react';

import classes from './ViewWidgetGrid.module.css';

const ViewWidgetGrid = (props) => {
const GridStyles = { backgroundColor:"#88C2F3", border:"1px black solid", height:200}
return(
<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    <Grid.Col  span={4}><div style={GridStyles}> widget </div></Grid.Col>
    
  </Grid>
);
};

export default ViewWidgetGrid;