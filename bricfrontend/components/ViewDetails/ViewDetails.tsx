import { Button, Divider, Group, ScrollArea, Text } from '@mantine/core';
import { IconCopy, IconLink, } from '@tabler/icons-react';

import React from 'react';


import classes from './ViewDetails.module.css';
import ViewWidgetGrid from './ViewWidgets/ViewWidgetGrid';


const ViewDetails = (props) => {
return(
<>
<Text size="xl">Extra large text</Text>
 <Divider my="sm" />
 <ScrollArea h={'60vh'}>
 <ViewWidgetGrid/>
</ScrollArea>
<Divider my="sm" />
<div className={classes.bottomAction}>
    <div className={classes.copyButtons}>
    <Button leftSection={<IconLink size={14} />} variant="default">
        Copy Link
      </Button>
      <Button leftSection={<IconCopy size={14} />} variant="default">
        Copy code
      </Button>
    </div>
    <div>
        {/* button doesnt work, will make it work later now getting late for colelge */}
    <Button onClick={props.onClose} variant="default">
        Done
      </Button>
    </div>
</div>

</>
);
};

export default ViewDetails;