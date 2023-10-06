"use client"
import { LinksGroup } from '@/components/NavbarLinksGroup/NavbarLinksGroup';
import { IconMessageCircle, IconPhoto, IconPlus, IconSettings } from '@tabler/icons-react';

import { UserButton } from '@/components/UserButton/UserButton';
import { AppShell, Box, Button, ScrollArea, Tabs, UnstyledButton, rem } from '@mantine/core'; // Import missing components
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

import ViewTab from '@/components/ViewTab/ViewTab';
import classes from '../../components/NavbarLinksGroup/NavbarLinksGroup.module.css';
import styles from "./dashBoardLayout.module.css";

const projects = ["NHAI road 12", 'Add Project +'];

export default function Layout({ children }) {
  const { opened, toggle } = useDisclosure();


  // inline objects styles defined here
  const tabstyles = {fontSize:"20px" }
  const iconStyle = { width: rem(20), height: rem(20) };
   const addViewStyle = { position:'absolute', right:50, padding:10,  bottom:5}





  const links = projects.map((item) => (
    <UnstyleBoxSomething label={item} key={item} /> 
  ));

  function UnstyleBoxSomething({ label }) {
    return (
      <UnstyledButton className={classes.control}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          {label}
        </Box>
      </UnstyledButton>
    );
  }

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </AppShell.Section>
        <AppShell.Section> <UserButton /> </AppShell.Section>
      </AppShell.Navbar>




      <AppShell.Main>
        <Tabs variant="outline" defaultValue="gallery" >
      <Tabs.List >
        <Tabs.Tab  value="gallery" style={tabstyles} leftSection={<IconPhoto style={iconStyle} />}>
          Overview
        </Tabs.Tab>
        <Tabs.Tab value="messages" style={tabstyles} leftSection={<IconMessageCircle style={iconStyle} />}>
          Issues
        </Tabs.Tab>
        {/* <Tabs.Tab value="settings" style={tabstyles} leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab> */}
        <Button style={addViewStyle} variant="filled" rightSection={<IconPlus size={14} />} >
        Add view
      </Button>
      </Tabs.List>

      <Tabs.Panel value="gallery">
      <ViewTab/>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs></AppShell.Main>
    </AppShell>
  );
}
