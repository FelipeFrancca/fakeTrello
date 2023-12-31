import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ display: "flex", alignItems: "center", gap: 0 }}
      >
        <Typography variant='p' sx={{ color: "#9FADBC", textTransform: "None"}}>
          Menu test 
        </Typography>
        <ArrowDown sx={{ color: "#9FADBC",}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Test 1</MenuItem>
        <MenuItem onClick={handleClose}>Teste 2</MenuItem>
        <MenuItem onClick={handleClose}>Teste 3</MenuItem>
      </Menu>
    </div>
  );
}