import React, { useState } from "react";
import {
  Divider,
  Input,
  Box,
  Paper,
  Button,
  Stack,
  Card,
} from "@mantine/core";
import { ButtonCopy } from "../ButtonCopy/ButtonCopy";
import { PillBarSelect } from "../PillBarSelect/PillBarSelect";
import { StatsControls } from "../StatsControls/StatsControls";
import { StatsGridIcons } from "../StatsGridIcons/StatsGridIcons";

export default function SharedMakeView() {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  function handleClickedComponent(componentName: string) {
    if (selectedComponents.includes(componentName)) {
      // If the component is already selected, remove it from the array
      setSelectedComponents((prevSelected) =>
        prevSelected.filter((item) => item !== componentName)
      );
    } else {
      // If the component is not selected, add it to the array
      setSelectedComponents((prevSelected) => [...prevSelected, componentName]);
    }
  }

  const isComponentSelected = (componentName: string) =>
    selectedComponents.includes(componentName);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "2rem",
      }}
    >
      <Paper
        style={{
          padding: "1rem",
          width: "100%",
          border: "0.5px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Input style={{ flex: 1 }} placeholder="View name" />
          <PillBarSelect style={{ flex: 1 }} />
        </div>
        <Divider my="sm" variant="dotted" />

        <Stack spacing="sm">
          <Card
            shadow="xs"
            style={{
              cursor: "pointer",
              border: isComponentSelected("StatsControls")
                ? "2px solid #007bff"
                : "none",
            }}
            onClick={() => handleClickedComponent("StatsControls")}
          >
            <StatsControls />
          </Card>
          <Card
            shadow="xs"
            style={{
              cursor: "pointer",
              border: isComponentSelected("StatsGridIcons")
                ? "2px solid #007bff"
                : "none",
            }}
            onClick={() => handleClickedComponent("StatsGridIcons")}
          >
            <StatsGridIcons />
          </Card>
        </Stack>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <ButtonCopy />
          <Button style={{ height: "auto" }}>Save</Button>
        </Box>
      </Paper>
    </Box>
  );
}
