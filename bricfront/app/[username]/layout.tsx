"use client"
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, ScrollArea, UnstyledButton, Box } from '@mantine/core'; // Import missing components
import { UserButton } from '@/components/UserButton/UserButton';
import classes from '../../components/NavbarLinksGroup/NavbarLinksGroup.module.css';
import { LinksGroup } from '@/components/NavbarLinksGroup/NavbarLinksGroup';

const projects = ["NHAI road 12",  "add project"];

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
