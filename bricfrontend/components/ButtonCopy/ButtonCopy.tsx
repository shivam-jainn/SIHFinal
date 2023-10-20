import React, { useState, useEffect } from 'react';
import { Button, rem, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck } from '@tabler/icons-react';

interface ButtonCopyProps {
  link?: string; // Make the link prop optional
}

export function ButtonCopy({ link }: ButtonCopyProps) {
  const clipboard = useClipboard();
  const [randomLink, setRandomLink] = useState('');

  useEffect(() => {
    if (!link) {
      // Generate a random link when the component mounts if no link is provided
      const newRandomLink = generateRandomLink('https://example.com'); // Replace with your base URL
      setRandomLink(newRandomLink);
    }
  }, [link]);

  const handleCopyLink = () => {
    if (link) {
      // Implement your logic to copy the provided link
      clipboard.copy(link);
    } else {
      // Implement your logic to copy the random link
      clipboard.copy(randomLink);
    }
  };

  return (
    <Tooltip
      label={clipboard.copied ? 'Code copied!' : 'Link copied'}
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightSection={
          link ? (
            'hi'
          ) : clipboard.copied ? (
            <IconCheck style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          ) : (
            <IconCopy style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          section: { marginLeft: rem(22) },
        }}
        onClick={handleCopyLink}
      >
        Copy link
      </Button>
    </Tooltip>
  );
}

function generateRandomLink(baseURL: string): string {
  const randomString = Math.random().toString(36).substring(7); // Generates a random string
  return `${baseURL}/${randomString}`;
}
