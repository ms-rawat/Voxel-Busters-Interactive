import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from './Sidebar';

export default function TemporaryDrawer({data}) {
    const [state, setState] = React.useState({
        bottom: false,
      });
      

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={(event) => {
       
        event.stopPropagation();
      }}
      onKeyDown={toggleDrawer('bottom', false)}
    >

   <Sidebar data={data}/>

    </Box>
  );
  
  return (
    <div>
      <Button    onClick={toggleDrawer('bottom', true)}><div className='text-slate-100'>Filter</div></Button>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}