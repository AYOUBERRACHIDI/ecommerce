import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <AccountCircle />
        </IconButton>
        <InputBase placeholder="Rechercher..." style={{ flex: 1, marginLeft: 20 }} />
        <IconButton color="inherit">
          <Search />
        </IconButton>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
