import { Button, Divider, Group, ScrollArea, Text, Tooltip, rem } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCheck, IconCopy, IconLink } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

import classes from './AddViewModal.module.css';
import ViewWidgetGrid from './ViewWidgets/ViewWidgetGrid';

const AddViewModal = (props) => {
  const clipboard = useClipboard();
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Function to close the tooltips after a certain duration
  const closeTooltipsAfterDelay = () => {
    if (copiedLink) {
      setTimeout(() => {
        setCopiedLink(false);
      }, 2000); // Close the tooltip after 2 seconds
    }
    if (copiedCode) {
      setTimeout(() => {
        setCopiedCode(false);
      }, 2000); // Close the tooltip after 2 seconds
    }
  };

  // Listen for changes in copiedLink and copiedCode and close tooltips accordingly
  useEffect(() => {
    closeTooltipsAfterDelay();
  }, [copiedLink, copiedCode]);

  const handleCopyLink = () => {
    clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    setCopiedLink(true);
  };

  const handleCopyCode = () => {
    clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    setCopiedCode(true);
  };

  return (
    <>
      <Text size="xl">Extra large text</Text>
      <Divider my="sm" />
      <ScrollArea h={'60vh'}>
        <ViewWidgetGrid />
      </ScrollArea>
      <Divider my="sm" />
      <div className={classes.bottomAction}>
        <div className={classes.copyButtons}>
          <div>
            <Tooltip
              label="Link copied!"
              offset={5}
              position="bottom"
              radius="xl"
              transitionProps={{ duration: 100, transition: 'slide-down' }}
              opened={copiedLink}
            >
              <Button
                variant="light"
                rightSection={
                  copiedLink ? (
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
          </div>
          <div>
            <Tooltip
              label="Code copied!"
              offset={5}
              position="bottom"
              radius="xl"
              transitionProps={{ duration: 100, transition: 'slide-down' }}
              opened={copiedCode}
            >
              <Button
                variant="light"
                rightSection={
                  copiedCode ? (
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
                onClick={handleCopyCode}
              >
                Copy Code
              </Button>
            </Tooltip>
          </div>
        </div>
        <div>
          <Button style={{marginTop:"5px"}} onClick={props.onClose} variant="filled">
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddViewModal;
