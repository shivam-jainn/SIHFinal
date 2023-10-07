import React from "react";
import { Button } from "@mantine/core"; 
import { IconPlus } from "@tabler/icons-react";
import AddView from "./View/AddView";


export default function AddProject() {
  return (
    <Button fullWidth rightSection={<IconPlus size={14} />}  >Add Project</Button>
  )
}
