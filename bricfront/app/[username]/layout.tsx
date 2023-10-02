"use client"
import React, { Children } from 'react'
// import { NavbarNested } from '@/components/NavbarNested/NavbarNested'
// import classes from './dashBoardLayout.module.css'
// export default function Layout({children}) {
//   return (
//     <div className={classes.dashBoardLayout}>
//         <NavbarNested />
//         <div>
//           {children}
//         </div>
        
//     </div>
//   )
// }


import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, ScrollArea } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { UserButton } from '@/components/UserButton/UserButton';


export default function layout({children}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
           padding="md"

    >

<AppShell.Navbar p="md">
         <AppShell.Section>Navbar header</AppShell.Section>
         <AppShell.Section grow my="md" component={ScrollArea}>
           60 links in a scrollable section
           {Array(60)
             .fill(0)
             .map((_, index) => (
               <Skeleton key={index} h={28} mt="sm" animate={false} />
             ))}
         </AppShell.Section>
         <AppShell.Section> <UserButton /> </AppShell.Section>
       </AppShell.Navbar>
       <AppShell.Main>{children}</AppShell.Main>

    </AppShell>
  )
}

