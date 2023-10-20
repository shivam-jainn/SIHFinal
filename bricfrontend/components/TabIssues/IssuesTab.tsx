'use client'
import { Avatar, Badge, Group, Modal, Select, Table, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';

import IssueModal from './IssueModal/IssueModal';
import classes from './IssuesTab.module.css';



const data = [
  {
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    desc: 'rob_wolf@gmail.com',
    role: 'Collaborator',
    lastActive: '2 days ago',
    active: true,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    desc: 'jj@breaker.com',
    role: 'Collaborator',
    lastActive: '6 days ago',
    active: true,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Henry Silkeater',
    job: 'Designer',
    desc: 'henry@silkeater.io',
    role: 'Contractor',
    lastActive: '2 days ago',
    active: false,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Bill Horsefighter',
    job: 'Designer',
    desc: 'bhorsefighter@gmail.com',
    role: 'Contractor',
    lastActive: '5 days ago',
    active: true,
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Jeremy Footviewer',
    job: 'Manager',
    desc: 'jeremy@foot.dev',
    role: 'Manager',
    lastActive: '3 days ago',
    active: false,
  },
];

const rolesData = ['Manager', 'Collaborator', 'Contractor'];

export default function IssuesTab() {
  
  const [selectedData, setSelectedData] = useState(null); // Initialize the selected data as null

  const [opened, { open, close }] = useDisclosure(false);
  const handleRowClick = (index) => {
    setSelectedData(data[index]); // Set the selected data based on the clicked row
    open(); // Open the modal
  };
  const rows = data.map((item, index) => (
    <>
    
    <Table.Tr onClick={() => handleRowClick(index)} className={classes.tableRow} key={item.name}>
    {/* <Modal 
 opened={opened} onClose={close}  classNames={{
  overlay:classes.overlayCustom
}}title="" size="calc(100vw - 3rem)" centered>
       <IssueModal data={item}  />
      </Modal> */}
      <Table.Td>
        <Group gap="sm">
          {/* <Avatar size={40} src={item.avatar} radius={40} /> */}
          <div>
            <Text className={classes.issueName} fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.desc}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        {item.role}
      </Table.Td>
      <Table.Td>{item.lastActive}</Table.Td>
      <Table.Td>
        {item.active ? (
          <Badge  variant="light">
            Open
          </Badge>
        ) : (
          <Badge color="gray"  variant="light">
            Closed
          </Badge>
        )}
      </Table.Td>
    </Table.Tr>
    
    </>
  ));

  return (
    <>
    
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Issue</Table.Th>
            <Table.Th>From</Table.Th>
            <Table.Th>Issue Posted</Table.Th>
            <Table.Th>Issue Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    <Modal opened={opened} onClose={close} title="" size="calc(100vw - 3rem)" centered>
          <IssueModal data={data} />
        </Modal>
    </>
    
  );
}