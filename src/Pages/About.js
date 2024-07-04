import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function About() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ height: "100vh", pt: { xs: 10, md: 17 } }}
    >
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: { xs: "35px", md: "40px" }, fontWeight: "bold" }}
          >
            ABOUT ME
          </Typography>
        </Grid>

        <Grid item xs={11} md={6}>
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "22px" },
              paddingBottom: { xs: "80px", md: "150px" },
              pt: 2,
            }}
          >
            Here you will find more information about me,what i do, and my
            current skills mostly in terms of programming and technology
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Grid item xs={6} md={9} sx={{ pb: 4 }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "20px", md: "28px" } }}
            >
              Get to know me!
            </Typography>
          </Grid>

          <Grid item xs={12} md={10} sx={{ textAlign: { xs: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                pl: { xs: 2, md: 36 },
                lineHeight: { xs: "1.5", md: "" },
              }}
            >
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              Projects section.
            </Typography>
          </Grid>

          <Grid item xs={12} md={10} sx={{ textAlign: { xs: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                pl: { xs: 2, md: 36 },
                pt: 2,
                lineHeight: { xs: "1.5", md: "" },
              }}
            >
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin and Instagram where I post useful content related to
              Web Development and Programming
            </Typography>
          </Grid>

          <Grid item xs={12} md={10} sx={{ textAlign: { xs: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                pl: { xs: 2, md: 36 },
                pt: 2,
                lineHeight: { xs: "1.5", md: "" },
              }}
            >
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              fontSize: { xs: "18px" },
              pl: { xs: 0, md: 25 },
              pt: 5,
              pb: { xs: 10, md: 40 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "12px 45px",
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
              }}
            >
              CONTACT
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid item xs={12} md={9}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "23px", md: "30px" },
                textAlign: "left",
                pb: { xs: 3, md: 0 }, 
                pl: { xs: 2, md: 0 },
              }}
            >
              My Skills
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin:{xs:"40px 55px 0 15px"},
                            pt: { xs: 0, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              HTML
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              CSS
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              JavaScript
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              React
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: { xs: 0, md: 2 },
              margin:{xs:"20px 80px 0 15px",md:""}}}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              GIT
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              Github
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              Responsive Design
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: { xs: 0, md: 2 },
              margin:{xs:"20px 80px 0 15px",}}}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              Terminal
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "10px", md: "15px" },
                textAlign: "center",
                border: "1px solid black",
                padding: { xs: "9px 10px", md: "8px 15px" },
                borderRadius: "5px",
                bgcolor: "gray",
              }}
            >
              Bootstrap
            </Typography>
          </Grid>

          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
