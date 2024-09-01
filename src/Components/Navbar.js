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
          <Grid container item xs={12}>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                p: 3,
                pl: 1,
                alignItems: "center",
                height: { xs: "90px", md: "100px" },
                width: { xs: "15px" },
              }}
            >
              <img
                src="/imageprofile.png"
                alt="not found"
                style={{ height: "100%", width: "30%",borderRadius:"10px" }}
              />
              <Typography
                sx={{
                  paddingLeft: { xs: "5px", md: "23px" },
                  fontWeight: "bold",
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                JYOTHIRLATHA
              </Typography>
            </Grid>
          </Grid>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }), display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid
            item
            xs={7}
            sx={{
              justifyContent: "flex-end",
              p: 3,
              alignItems: "center",
              fontWeight: "bold",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to='/' style={{ textDecoration: "none" }}>
              <Typography sx={{ pr: 5, color: "black", fontSize: "18px" }}>
                HOME
              </Typography>
            </NavLink>
            <NavLink to='/about' style={{ textDecoration: "none" }}>
              <Typography sx={{ pr: 5, color: "black", fontSize: "18px" }}>
                ABOUT
              </Typography>
            </NavLink>
            <NavLink to='/projects' style={{ textDecoration: "none" }}>
              <Typography sx={{ pr: 5, color: "black", fontSize: "18px" }}>
                PROJECTS
              </Typography>
            </NavLink>
            <NavLink to='/contact' style={{ textDecoration: "none" }}>
              <Typography sx={{ pr: 5, color: "black", fontSize: "18px" }}>
                CONTACT
              </Typography>
            </NavLink>
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
        <Grid
          item
          xs={7}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
            fontWeight: "bold",
            display: { xs: "flex", md: "none" },
            flexDirection: { xs: "column", md: "" }
          }}
        >
          <NavLink to='/' style={{ textDecoration: "none" }}>
            <Typography sx={{ pr: 5, color: "black", fontSize: { xs: "15px", md: "18px" } }}>
              HOME
            </Typography>
          </NavLink>
          <NavLink to='/about' style={{ textDecoration: "none" }}>
            <Typography sx={{ pr: 5, color: "black", fontSize: { xs: "15px", md: "18px" } }}>
              ABOUT
            </Typography>
          </NavLink>
          <NavLink to='/projects' style={{ textDecoration: "none" }}>
            <Typography sx={{ pr: 5, color: "black", fontSize: { xs: "15px", md: "18px" } }}>
              PROJECTS
            </Typography>
          </NavLink>
          <NavLink to='/contact' style={{ textDecoration: "none" }}>
            <Typography sx={{ pr: 5, color: "black", fontSize: { xs: "15px", md: "18px" } }}>
              CONTACT
            </Typography>
          </NavLink>
        </Grid>
      </Drawer>
    </Box>
  );
}

