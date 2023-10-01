"use client"
import React from 'react'
import { NavbarNested } from '@/components/NavbarNested/NavbarNested'
import classes from './dashBoardLayout.module.css'
export default function Layout({children}) {
  return (
    <div className={classes.dashBoardLayout}>
        <NavbarNested />
        <div>
          {children}
        </div>
        
    </div>
  )
}
