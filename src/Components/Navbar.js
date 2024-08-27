import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="blob:https://web.whatsapp.com/dfeeb14f-318a-446e-9324-f41a0b5d4f16"
                alt="Logo"
                style={{ height: '100%', width: '15%' }}
              />
              <Typography
                sx={{
                  paddingLeft: { xs: '5px', md: '23px' },
                  fontWeight: 'bold',
                  fontSize: { xs: '16px', md: '20px' },
                }}
              >
                JYOTHIRLATHA
              </Typography>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }), display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              item
              xs={7}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
                fontWeight: 'bold',
              }}
            >
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Typography sx={{ pr: 5, color: 'black', fontSize: '18px' }}>
                  HOME
                </Typography>
              </NavLink>
              <NavLink to="/about" style={{ textDecoration: 'none' }}>
                <Typography sx={{ pr: 5, color: 'black', fontSize: '18px' }}>
                  ABOUT
                </Typography>
              </NavLink>
              <NavLink to="/projects" style={{ textDecoration: 'none' }}>
                <Typography sx={{ pr: 5, color: 'black', fontSize: '18px' }}>
                  PROJECTS
                </Typography>
              </NavLink>
              <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                <Typography sx={{ pr: 5, color: 'black', fontSize: '18px' }}>
                  CONTACT
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        onClick={handleDrawerClose}
      >
        <DrawerHeader />
        <Grid
          container
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: 3,
          }}
        >
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Typography sx={{ py: 1, color: 'black', fontSize: '18px' }}>
              HOME
            </Typography>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <Typography sx={{ py: 1, color: 'black', fontSize: '18px' }}>
              ABOUT
            </Typography>
          </NavLink>
          <NavLink to="/projects" style={{ textDecoration: 'none' }}>
            <Typography sx={{ py: 1, color: 'black', fontSize: '18px' }}>
              PROJECTS
            </Typography>
          </NavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <Typography sx={{ py: 1, color: 'black', fontSize: '18px' }}>
              CONTACT
            </Typography>
          </NavLink>
        </Grid>
      </Drawer>
    </Box>
  );
}
