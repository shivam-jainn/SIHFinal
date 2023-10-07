import React from 'react'
import { IconUsers } from '@tabler/icons-react'
import {Paper} from '@mantine/core'

export default function Attendance({totalAttendance}) {
  return (
    <Paper shadow="xs" p="xl">
        <IconUsers />
        {totalAttendance}
    </Paper>
  )
}
