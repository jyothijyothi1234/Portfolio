import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { NavLink } from "react-router-dom";
import  Banner from '../images/BackgroundImage.jpg'
function Home() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        backgroundImage:`url(${Banner})`,
        height: {xs:"70vh",md:"100vh"},
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      
      <Grid
        item
        xs={12}
        sx={{
          flexDirection: "column",
          paddingBottom: { xs: "50px", md: "0" },
        
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            paddingBottom: { xs: "25px", md: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: { xs: "40px", md: "55px" },
              fontWeight: "bold",
              mr: { xs: 0, md: 10 },
              paddingTop:{xs:"100px",md:"0"}
            }}
          >
            HEY, I'M JYOTHIRLATHA
          </Typography>
        </Grid>

        <Grid item xs={11} md={8}>
          <Typography
            sx={{
              color: "black",
              fontSize: { xs: "15px", md: "20px" },
              ml: { xs: 1, md: 67 },
              fontWeight: "lighter",
            
            }}
          >
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </Typography>
        </Grid>

        <Grid item xs={9} sx={{ marginTop: { xs: "35px", md: "45px" } }}>
          <NavLink  to='/projects'>
          <Button
            variant="contained"
            sx={{
              padding: { xs: "13px 60px", md: "20px 80px" },
              fontWeight: "bold",
              fontSize: { xs: "16px", md: "20px" },
              ml: { xs: 10, md: 40 },
              ":hover":{
                transform:"translateY(-5px)",
                transition:"all 400ms"
              }
            }}
          >
            PROJECTS
          </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
