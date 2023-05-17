import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import sample2 from '../sample2.json'
import { Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


interface Root2 {
    department: string
    sub_departments: string[]
  }
  const users:Root2[]=sample2;

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);
  const [checked1, setChecked1] = React.useState([true, false,false]);
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleclick1=()=>{
    setOpen1(!open1);
};
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, event.target.checked,event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange22 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, checked1[1],checked1[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleChange33 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], event.target.checked,checked1[2]]);
  };
  const handleChange44 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0],checked1[1], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label={users[0].sub_departments[0]}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={users[0].sub_departments[1]}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label={users[1].sub_departments[0]}
        control={<Checkbox checked={checked1[0]} onChange={handleChange22} />}
      />
      <FormControlLabel
        label={users[1].sub_departments[1]}
        control={<Checkbox checked={checked1[1]} onChange={handleChange33} />}
      />
      <FormControlLabel
        label={users[1].sub_departments[2]}
        control={<Checkbox checked={checked1[2]} onChange={handleChange44} />}
      />
    </Box>
  );

  return (
    <>
    <div>
        <ListItemButton onClick={handleClick}>
          <FormControlLabel
             label={users[0].department}
            control={
              <Checkbox
              checked={checked[0] && checked[1]}
               indeterminate={checked[0] !== checked[1]}
               onChange={handleChange1}
          />
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
         {children}
      </Collapse>
      
    </div>
    <div>
    <ListItemButton onClick={handleclick1}>
      <FormControlLabel
        label={users[1].department}
        control={
          <Checkbox
            checked={checked1[0] && checked1[1]&&checked1[2]}
            indeterminate={checked1[0] !== checked1[1]||checked1[0]!==checked1[2]||checked1[1]!==checked1[2]}
            onChange={handleChange11}
          />
        }
      />
      {open1 ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
         {children1}
      </Collapse>
      
    </div>
    </>
  );
}
