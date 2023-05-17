import { Checkbox, Collapse, List, ListItemButton } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';


function Mani() {
    

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const handleclick1=()=>{
        setOpen1(!open1);
    };
    return (
        <>
          <List>
            <ListItemButton onClick={handleClick}>
               <Checkbox {...label} defaultChecked />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                   <ListItemButton>
                      <Checkbox {...label} defaultChecked />
                   </ListItemButton>
                </List>
                <List component="div" disablePadding>
                   <ListItemButton>
                      <Checkbox {...label} defaultChecked />
                   </ListItemButton>
                </List>
            </Collapse>
          </List>
          <List>
            <ListItemButton onClick={handleclick1}>
               <Checkbox {...label} defaultChecked />
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                   <ListItemButton>
                      <Checkbox {...label} defaultChecked />
                   </ListItemButton>
                </List>
                <List component="div" disablePadding>
                   <ListItemButton>
                      <Checkbox {...label} defaultChecked />
                   </ListItemButton>
                </List>
            </Collapse>
          </List>
      </>

    )
}

export default Mani

