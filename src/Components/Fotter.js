import React from "react";
import { Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Fotter() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        bgcolor: "black",
        height: {xs:"50vh",md:"45vh"},
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={11}
        sx={{ color: "white", justifyContent: "center", p: {xs:0,md:12},mt:{xs: 10,md:0} }}
      >
        <Grid item  xs={12} md={5} sx={{ pl: {xs:2 ,md:10} }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: {xs:"20px",md:"23px"},
                pb: {xs:2,md:2},
              }}
            >
              JYOTHIRLATHA
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "left", fontSize: {xs:"14px",md:"16px"}, lineHeight: "25px" }}
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </Typography>
          </Grid>
        </Grid>
        <Grid item  xs={12} md={7} sx={{ textAlign: "left" }}>
          <Grid item  xs={2} md={9} sx={{ ml: {xs:2,md:13} }}
>
            <Typography
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: {xs:"18px",md:"23px"},
                display: "flex",
                justifyContent: "flex-end",
                pb: {xs: 2,md:2},
                pl: { xs: 2,md: 1},
              }}
            >
              SOCIAL
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            md={9}
            sx={{ display: "flex", justifyContent: "flex-end",ml:{ xs: 1,md: 50},height:"100%"
          }}
          >
            <LinkedInIcon sx={{ pr: {xs:1,md:2},height:{xs:"30px",md:"50px"},width:{xs:"30px",md:"50px"} }} />
            <GitHubIcon sx={{ pr: {xs:1,md:2},height:{xs:"30px",md:"50px"},width:{xs:"30px",md:"50px"}  }} />
            <TwitterIcon sx={{ pr: {xs:1,md:2},height:{xs:"30px",md:"50px"},width:{xs:"30px",md:"50px"}  }} />
            <YouTubeIcon sx={{ pr: {xs:1,md:2},height:{xs:"30px",md:"50px"},width:{xs:"30px",md:"50px"}  }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}




export default Fotter;
