import React from "react";
import { Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        bgcolor: "black",
        height: { xs: "50vh", md: "30vh" },
        p: { xs: 2, md: 4 }, 
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={11}
        sx={{
          color: "white",
          justifyContent: "center",
          textAlign: "center", 
        }}
      >
        <Grid item xs={12} md={5} sx={{ pl: { xs: 2, md: 10 } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "20px", md: "23px" },
              pb: { xs: 2, md: 2 },
            }}
          >
            JYOTHIRLATHA
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "25px",
            }}
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "18px", md: "23px" },
              pb: { xs: 2, md: 2 },
            }}
          >
            SOCIAL
          </Typography>
          <Grid
            container
            justifyContent="center"
          
          >
            <Grid item>
              <LinkedInIcon
                sx={{ height: { xs: "30px", md: "50px" }, width: { xs: "30px", md: "50px" } }}
              />
            </Grid>
            <Grid item>
              <GitHubIcon
                sx={{ height: { xs: "30px", md: "50px" }, width: { xs: "30px", md: "50px" } }}
              />
            </Grid>
            <Grid item>
              <TwitterIcon
                sx={{ height: { xs: "30px", md: "50px" }, width: { xs: "30px", md: "50px" } }}
              />
            </Grid>
            <Grid item>
              <YouTubeIcon
                sx={{ height: { xs: "30px", md: "50px" }, width: { xs: "30px", md: "50px" } }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
