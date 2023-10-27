"use client"
import AddProject from '@/components/Addproject/AddProject';
import AddView from '@/components/Addproject/View/AddView';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';
import IssuesTab from '@/components/TabIssues/IssuesTab';
import { TableSelection } from '@/components/TableSelection/TableSelection';
import { UserButton } from '@/components/UserButton/UserButton';
import ViewTab from '@/components/ViewTab/ViewTab';
import { AppShell, Box, Button, ScrollArea, Tabs, UnstyledButton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMessageCircle, IconPhoto, IconPlus, IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';
import classes from '../../components/NavbarLinksGroup/NavbarLinksGroup.module.css';
import styles from './dashBoardLayout.module.css';
const projects = ["NHAI road 12" , "Brothel Contruction"]; 


export default function Layout({ children }) {
  const { opened, toggle } = useDisclosure();
  const [showAddView, setShowAddView] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [projects, setProjects] = useState(["NHAI road 12"]);

  const addViewStyle = { position: 'absolute', right: 50 };
  const tabstyles = { fontSize: "20px" };
  const iconStyle = { width: rem(20), height: rem(20) };

  const links = projects.map((item) => (
    <Link href={`dashboard/project/${item}`} key={item}>
      
        <UnstyleBoxSomething label={item} />
     
    </Link>
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

  // Handle the form submission for adding a new project
  const handleAddProject = () => {
    if (newProjectName) {
      setProjects([...projects, newProjectName]);
      setNewProjectName('');
      setShowAddProject(false);
    }
  };

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
          <Button fullWidth rightSection={<IconPlus size={14} />} onClick={() => setShowAddProject(true)}>
            Add Project
          </Button>
        </AppShell.Section>
        <AppShell.Section>
          <UserButton />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
      {showAddProject ? (
          <div>
            <input
              type="text"
              placeholder="Enter project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <Button onClick={handleAddProject}>Add</Button>
          </div>
        ) : showAddView ? (
          <AddView />
        ) : (
          <Tabs variant="outline" defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" style={tabstyles} leftSection={<IconPhoto style={iconStyle} />}>
                Overview
              </Tabs.Tab>
              <Tabs.Tab value="issues" style={tabstyles} leftSection={<IconMessageCircle style={iconStyle} />}>
                Issues
              </Tabs.Tab>
              <Tabs.Tab value="shared" style={tabstyles} leftSection={<IconSettings style={iconStyle} />}>
                Shared
              </Tabs.Tab>

             <div style={{position:'absolute', display:"flex", gap:"1rem",right:50}}>
             <Button variant="filled" rightSection={<IconPlus size={14} />} onClick={() => setShowAddView(true)}>

                Add view
              </Button>

              {/* <Button variant="filled" onClick={() => setShowAddView(true)}>
                Share view
              </Button> */}

             </div>

            </Tabs.List>
            <Tabs.Panel value="gallery">
              <LeadGrid />
            </Tabs.Panel>
            <Tabs.Panel value="issues">
              <IssuesTab />
            </Tabs.Panel>
            <Tabs.Panel value="shared">
              <TableSelection />
              {/* <SharedMakeView /> */}
            </Tabs.Panel>
          </Tabs>
        )}
      </AppShell.Main>
    </AppShell>
  );
}
