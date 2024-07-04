import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CeramicsStudio from "../images/Ceramics Studio.png"
import FoodWebsite from "../images/FoodWebsite.png"
import KFCImage from "../images/KFC Image.png"
import ShopInStyle from "../images/Shop in Style.png"
import irakiTechnologies from "../images/irakiwebsite.png"

function Projects() {
  return (
    <Grid container item xs={12} sx={{  pt: {xs:50,md:20} }}>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: { xs: "30px", md: "40px" }, fontWeight: "bold" ,pb:5}}
          >
            PROJECTS
          </Typography>
        </Grid>

        <Grid item xs={9} md={6}  sx={{pb:{xs:5 ,md:15}}}>
          <Typography sx={{ fontSize: { xs: "15px", md: "22px" } }}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </Typography>
        </Grid>
      </Grid>



      <Grid container item xs={12}  >
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15} }}>
          <img
            src={CeramicsStudio}
            alt="Ceramics Studio"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 2,
                pb: 3,
                pl: 6,
              }}
            >
              Dopefolio
            </Typography>
          </Grid>

          <Grid item   xs={12} md={8}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </Typography>
          </Grid>
          <Grid item  xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
              //  ml:{xs:"",md:""},
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>



      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15} }}>
          <img
            src={CeramicsStudio}
            alt="Ceramics Studio"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 2,
                pb: 3,
                pl: 6,
              }}
            >
              Dopefolio
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                // mr: 20,
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>



      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15} }}>
          <img
            src={FoodWebsite}
            alt="Ceramics Studio"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
            <Typography
             
                sx={{
                  fontSize: { xs: "30px", md: "30px" },
                  fontWeight: "bold",
                  textAlign: "left",
                  pt: 2,
                  pb: 3,
                  pl: 6,
                }}
             
            >
               Wilsonport
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
               Wilsonport is a multiservice logistics and transport company and I
              created their website from scratch using the frontend tools I
              know.
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
          <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                // mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>


      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15} }}>
          <img
            src={KFCImage}
            alt="Ceramics Studio"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
          <Typography
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 2,
                pb: 3,
                pl: 6,
              }}
            >
              Boreal Coffee Clone
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
          <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
          <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                // mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
       

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15}}}>
          <img
            src={ShopInStyle}
            alt="not found"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
          <Typography
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 2,
                pb: 3,
                pl: 6,
              }}
            >
              Crown Template
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
          <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Crown is a web template that I created targeting the restaurant
              and food industry which anyone can use to present their business
              online.
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
          <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                // mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
       



      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15}}}>
          <img
            src={irakiTechnologies}
            alt="not found"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={9}>
          <Typography
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 2,
                pb: 3,
                pl: 6,
              }}
            >
              IrakiTechnologies
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
          <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Wilsonport is a multiservice logistics and transport company and I
              created their website from scratch using the frontend tools I
              know.
            </Typography>
          </Grid>
          <Grid item xs={8} md={4} sx={{ mt: {xs: 2,md:5} }}>
          <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                // mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                },
                mb:{xs:"40px",md:"0"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      
  );
}

export default Projects;
