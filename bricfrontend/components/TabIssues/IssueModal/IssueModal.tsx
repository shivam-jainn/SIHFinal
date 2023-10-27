// IssueModal.tsx
import React from 'react';
import { Badge, Divider, Text, Title } from '@mantine/core';

const IssueModal = (props) => {
  const { data } = props;

  if (!data) {
    return null; // Handle the case when no data is selected
  }

  return (
    <>
      <Title> Issue </Title>
      <Text size="md">{data.issue}</Text>

      <div style={{ display: "flex", alignItems: "center", gap: 5, margin: "10px " }}>
        <div>
          <b>{data.name}</b> opened issue {data.lastActive} ago
        </div>
        {data.active ? <Badge color="green">OPEN</Badge> : <Badge color="gray">CLOSED</Badge>}
        <Badge color="blue">{data.role}</Badge>
        {/* Add more badges or information as needed */}
      </div>
      <Divider />
      {/* You can add more content specific to the issue here */}
    </>
  );
};

export default IssueModal;
