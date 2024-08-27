import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CeramicsStudio from "../images/Ceramics Studio.png";
import FoodWebsite from "../images/FoodWebsite.png";
import KFCImage from "../images/KFC Image.png";
import ShopInStyle from "../images/Shop in Style.png";
import irakiTechnologies from "../images/irakiwebsite.png";
import Flipkart from "../images/Flipkart.png";
import PaintingLogo from "../images/PaintingLogo.png";
import Urbanrise from "../images/Urbanrise.png";
import EkartImage from "../images/EkartImage.png";

function Projects() {
  return (
    <Grid container item xs={12} sx={{ pt: { xs: 50, md: 40 } }}>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: { xs: "30px", md: "40px" }, fontWeight: "bold", pb: 5 }}
          >
            PROJECTS
          </Typography>
        </Grid>

        <Grid item xs={9} md={6} sx={{ pb: { xs: 5, md: 15 } }}>
          <Typography sx={{ fontSize: { xs: "15px", md: "22px" } }}>
            Here you will find some of the personal and client projects that I created, each with its own case study.
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 10 } }}>
          <img
            src={Flipkart}
            alt="Flipkart Cart & Login Interaction"
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
              Flipkart Cart & Login Interaction
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "23px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is a simplified version of the Flipkart shopping experience, focusing on dynamic cart and login interactions.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Buy Now Functionality: Clicking the "Buy Now" button increases the cart counter value, indicating a direct purchase action.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Add to Cart Functionality: When the "Add to Cart" button is clicked, the login counter value increases, simulating a user adding items while logged in.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "35px" },
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 18 } }}>
          <img
            src={PaintingLogo}
            alt="Art Showcase & Interaction Platform"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={10}>
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
              Art Showcase & Interaction Platform
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is an interactive UI designed for showcasing paintings and photographs by various artists and photographers, tailored for modern wall decorators.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Image Gallery: A curated collection of high-quality paintings and photographs, allowing users to explore various styles and themes for modern wall decoration.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Chat Feature: An integrated chat option for users to engage directly with artists, photographers, or other enthusiasts, fostering a community around art appreciation and decoration.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Share Functionality: Easy sharing options for users to share their favorite artworks on social media platforms, promoting both the art and the artists.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "30px" },
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 17 } }}>
          <img
            src={FoodWebsite}
            alt="Restaurant Website"
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
              Restaurant Website
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is a user-friendly website for a restaurant, designed to enhance the dining experience through easy navigation and informative content.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Home: A welcoming landing page featuring the restaurant’s highlights, specials, and a brief introduction.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              About: An engaging section that tells the story of the restaurant, its history, culinary philosophy, and the team behind the scenes.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Menu: A comprehensive display of the restaurant’s offerings, categorized into starters, main courses, desserts, and beverages.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Contact: A section for users to get in touch with the restaurant, including location, hours of operation, and a contact form.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "35px" },
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 10 } }}>
          <img
            src={irakiTechnologies}
            alt="Iraki Technologies Profile Website"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={10}>
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
              Iraki Technologies Profile Website
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is a professional profile website for Iraki Technologies, showcasing the company's core values, mission, and services.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Core Values: A section dedicated to highlighting the company's values and commitment to its clients.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Mission: A clear and concise statement of the company's mission and objectives.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Get a Quotation: An interactive feature for potential clients to request a quotation for services.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "35px" },
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 20 } }}>
          <img
            src={Urbanrise}
            alt="Urbanrise Portfolio Website"
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
              Urbanrise Portfolio Website
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is a portfolio website for Urbanrise, showcasing their projects, price details, location advantages, and other key information.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Project Highlights: A detailed overview of Urbanrise's major projects and achievements.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Overview: A comprehensive introduction to Urbanrise and its services.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Price Details: Information about pricing and available options for potential clients.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Location Advantages: Details about the benefits of the locations Urbanrise operates in.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Walkthrough Video: An engaging video tour of Urbanrise's offerings and projects.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "35px" },
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb: { xs: 0, md: 15 }, pt: { xs: 0, md: 15 } }}>
          <img
            src={EkartImage}
            alt="eKart Mobile Website"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={10}>
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
              eKart Mobile Website
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              This project is a mobile-friendly eKart website, featuring essential e-commerce functionalities for a seamless shopping experience.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Home: The landing page with an overview of featured products and promotions.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Shop: A section displaying various product categories and options for users to browse and search.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Cart: An interactive cart feature that allows users to view and manage their selected items.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Login/Signup: Secure user authentication options for a personalized shopping experience.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: { xs: 2, md: 5 } }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "17px" },
                ":hover": {
                  transform: "translateY(-5px)",
                  transition: "all 400ms",
                },
                mb: { xs: "40px", md: "35px" },
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
