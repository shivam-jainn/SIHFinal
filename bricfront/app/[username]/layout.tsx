"use client"
import { LinksGroup } from '@/components/NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '@/components/UserButton/UserButton';
import { AppShell, Box, ScrollArea, UnstyledButton } from '@mantine/core'; // Import missing components
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import classes from '../../components/NavbarLinksGroup/NavbarLinksGroup.module.css';

const projects = ["NHAI road 12", 'Add Project +'];

export default function Layout({ children }) {
  const { opened, toggle } = useDisclosure();

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
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
