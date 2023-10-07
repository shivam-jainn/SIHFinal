"use client"
import { IconMessageCircle, IconPhoto, IconPlus, IconSettings } from '@tabler/icons-react';
import React, { useState } from 'react';

import { LinksGroup } from '@/components/NavbarLinksGroup/NavbarLinksGroup';


import { AppShell, Box, Button, Modal, ScrollArea, Tabs, UnstyledButton, rem } from '@mantine/core'; // Import missing components
import { useDisclosure } from '@mantine/hooks';

import AddProject from '@/components/Addproject/AddProject';
import AddView from '@/components/Addproject/View/AddView';
import SharedTab from '@/components/TabShared/SharedTab';
import ViewTab from '@/components/TabView/ViewTab';
import { UserButton } from '@/components/UserButton/UserButton';
import classes from '../../components/NavbarLinksGroup/NavbarLinksGroup.module.css';
import styles from './dashBoardLayout.module.css';
const projects = ["NHAI road 12", 'Add Project +'];

export default function Layout({ children }) {

  const [showAddView, setShowAddView] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  // const { opened, toggle } = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);


  const tabstyles = { fontSize: "20px" };
  const iconStyle = { width: rem(20), height: rem(20) };

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
        <AppShell.Section grow my="md" component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </AppShell.Section>
        <AppShell.Section>
          <Button fullWidth rightSection={<IconPlus size={14} />} onClick={() => setShowAddProject(true)}  >
            Add Project
          </Button>
        </AppShell.Section>
        <AppShell.Section>
          <UserButton />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>

        {showAddProject ? (
          <AddProject />
        ) : showAddView ? (
          <AddView />
        ) : (
          <Tabs variant="outline" defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" style={tabstyles} leftSection={<IconPhoto style={iconStyle} />}>
                Overview
              </Tabs.Tab>
              <Tabs.Tab value="messages" style={tabstyles} leftSection={<IconMessageCircle style={iconStyle} />}>
                Issues
              </Tabs.Tab>
              {/* <Tabs.Tab value="settings" style={tabstyles} leftSection={<IconSettings style={iconStyle} />}>
                Settings
              </Tabs.Tab> */}
              <Button variant="filled" rightSection={<IconPlus size={14} />} onClick={() => setShowAddView(true)}>
                Add view
              </Button>
            </Tabs.List>
            <Tabs.Panel value="gallery">
              <ViewTab />
            </Tabs.Panel>
            <Tabs.Panel value="messages">
              Messages tab content
            </Tabs.Panel>
            <Tabs.Panel value="settings">
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        )}
      </AppShell.Main>


        {/* //  <Modal opened={opened} onClose={close} title="Modal Name" centered size="calc(100vw - 3rem)" >
      //  <AddViewModal onClose={close}/>
      //</Modal> */}

     
    </AppShell>
  );
}
