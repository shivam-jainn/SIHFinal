import React, { useState } from "react";
import {
  Divider,
  Input,
  Box,
  Text,
  Paper,
  Button,
  Stack,
  Card,
  AspectRatio,
  Image,
} from "@mantine/core";
import { ButtonCopy } from "../ButtonCopy/ButtonCopy";
import { PillBarSelect } from "../PillBarSelect/PillBarSelect";
import { StatsControls } from "../StatsControls/StatsControls";
import { StatsGridIcons } from "../StatsGridIcons/StatsGridIcons";

export default function SharedMakeView() {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  function handleClickedComponent(componentName: string) {
    if (selectedComponents.includes(componentName)) {
      setSelectedComponents((prevSelected) =>
        prevSelected.filter((item) => item !== componentName)
      );
    } else {
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
      }}
    >
      <Paper
        withBorder
        style={{
          padding: "1rem",
          width: "100%",
          height: "80%",
          border: "2px dashed #ffffff",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Input placeholder="view name" />
          <PillBarSelect />
        </Box>
        <Divider my="sm" variant="dotted" />

        <Stack>
          <div
            onClick={() => handleClickedComponent("StatsControls")}
            style={{
              border: isComponentSelected("StatsControls")
                ? "2px solid #007bff"
                : "none",
            }}
          >
            <div>
              <StatsControls />
            </div>
          </div>
          <div
            onClick={() => handleClickedComponent("StatsGridIcons")}
            style={{
              border: isComponentSelected("StatsGridIcons")
                ? "2px solid #007bff"
                : "none",
            }}
          >
            <div>
              <StatsGridIcons />
            </div>
          </div>
        </Stack>

        <Paper
          withBorder
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <ButtonCopy />
          <Button style={{ height: "auto" }}>Save</Button>
        </Paper>
      </Paper>
    </Box>
  );
}
