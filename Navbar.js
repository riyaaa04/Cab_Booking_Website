import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AuthDialog from './Auth/AuthDialog';
import UserMenu from './Auth/UserMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsAuthenticated(!!user?.isAuthenticated);
  }, []);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAuthClose = (success) => {
    setAuthOpen(false);
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      {!isAuthenticated && (
        <ListItem button onClick={() => setAuthOpen(true)}>
          <ListItemText primary="Login / Sign Up" />
        </ListItem>
      )}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1, height: '80px', justifyContent: 'center' }}>
        <Toolbar sx={{ height: '80px', px: 3, pl: 15 }}>
          <LocalTaxiIcon sx={{ mr: 2, color: '#1976d2', fontSize: '2.5rem' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976d2', fontWeight: 600, fontSize: '1.8rem' }}>
            KTS Cabs
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: '2.8rem' }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  color="inherit"
                  component={Link}
                  to={item.path}
                  key={item.text}
                  sx={{ 
                    color: '#333', 
                    mx: 2, 
                    textTransform: 'none', 
                    fontSize: '1.1rem', 
                    fontWeight: 500,
                    borderRadius: '4px',
                    padding: '8px 16px',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#1976d2'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {isAuthenticated ? (
                <UserMenu 
                  onLogout={handleLogout}
                  iconButtonProps={{
                    sx: { 
                      color: '#1976d2',
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                      }
                    }
                  }}
                  iconProps={{
                    sx: { fontSize: '2rem' }
                  }}
                />
              ) : (
                <Button 
                  sx={{ 
                    color: '#333', 
                    mx: 2, 
                    fontSize: '1.1rem', 
                    fontWeight: 500,
                    borderRadius: '4px',
                    padding: '8px 16px',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#1976d2'
                    }
                  }} 
                  onClick={() => setAuthOpen(true)}>
                  Login / Sign Up
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* This empty Toolbar acts as a spacer */}
      <AuthDialog open={authOpen} onClose={handleAuthClose} />
    </>
  );
};

export default Navbar;