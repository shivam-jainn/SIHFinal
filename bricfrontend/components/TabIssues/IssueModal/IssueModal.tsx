import React from 'react';

import { Badge, Divider, Table, Text, Title } from '@mantine/core';
import classes from './IssueModal.module.css';

const IssueModal = (props:any) => {
return(
<>
<Title> Issue </Title>
<Text size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis dolores ad fugiat nostrum facilis, id voluptatum qui dicta sit odit accusamus, cupiditate expedita, quis obcaecati distinctio quibusdam dolore aliquid!</Text>

<div style={{display:"flex", alignItems:"center", gap:5, margin:"10px "}}>
    <div><b>
        Shivam Jain  
        </b> opened issue 2 days ago</div>
<Badge color="green">OPEN</Badge>
<Badge color="blue">High Priority</Badge>
{/* <Badge color="blue">Badge</Badge> */}
</div>
<Divider/>


</>
);
};

export default IssueModal;