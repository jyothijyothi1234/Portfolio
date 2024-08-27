import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CeramicsStudio from "../images/Ceramics Studio.png"
import FoodWebsite from "../images/FoodWebsite.png"
import KFCImage from "../images/KFC Image.png"
import ShopInStyle from "../images/Shop in Style.png"
import irakiTechnologies from "../images/irakiwebsite.png"
import Flipkart from "../images/Flipkart.png"
import PaintingLogo from "../images/PaintingLogo.png"
import Urbanrise from "../images/Urbanrise.png"
import EkartImage from "../images/EkartImage.png"

function Projects() {
  return (
    <Grid container item xs={12} sx={{  pt: {xs:50,md:40} }}>
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
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:10} }}>
          <img
            src={Flipkart}
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
             Flipkart Cart & Login Interaction
            </Typography>
          </Grid>

          <Grid item   xs={12} md={10}>
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
   Buy Now Functionality:    Clicking the "Buy Now" button increases the cart counter value, indicating a direct purchase action.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
   Add to Cart Functionality:     When the "Add to Cart" button is clicked, the login counter value increases, simulating a user adding items while logged in.
            </Typography>
          </Grid>
          <Grid item  xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"35px"},

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>



      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:18} }}>
          <img
            src={PaintingLogo}
            alt="Ceramics Studio"
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
              Image Gallery:    A curated collection of high-quality paintings and photographs, allowing users to explore various styles and themes for modern wall decoration.
              </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Chat Feature:    An integrated chat option for users to engage directly with artists, photographers, or other enthusiasts, fostering a community around art appreciation and decoration.
            </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Share Functionality:    Easy sharing options for users to share their favorite artworks on social media platforms, promoting both the art and the artists.            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"30px"},
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>



      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:17} }}>
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
Menu: A comprehensive display of the restaurant’s offerings, categorized into starters, main courses, desserts, and beverages, complete with descriptions and pricing.
</Typography>

<Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Contact Details: A dedicated section providing location information, opening hours, and a contact form for reservations or inquiries.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"20px"},

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>


      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:10} }}>
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
              KFC Online Ordering System
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
             Developed a KFC-inspired online ordering system featuring a user-friendly interface that allows customers to easily browse and order their favorite items. The project includes separate pages for Pizzas and Burgers, each displaying a variety of options with descriptions, images, and prices. Users can effortlessly add items to their cart using the "Add to Cart" button, dynamically updating the cart contents. The intuitive navigation and streamlined checkout process enhance the overall user experience, making online ordering fast and convenient.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:12} }}>
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
               Ceramics Studio Showcase UI
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
              Created a sleek and modern user interface for a ceramics studio, designed to highlight the studio's unique creations and offerings. The UI features visually appealing sections that showcase different ceramic products, workshops, and artist profiles. The layout is clean and minimalistic, emphasizing high-quality images and concise descriptions to capture the studio's aesthetic. The design ensures a user-friendly experience, allowing visitors to easily navigate and explore the studio's collection and services.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:0},pt:{xs:0,md:17} }}>
          <img
            src={Urbanrise}
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
             Urbanrise Living Website
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "25px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              A modern and interactive website for Urbanrise, showcasing their latest real estate project.
            </Typography>
          </Grid>


          <Grid item xs={12} md={9}>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "22px" },
                textAlign: "left",
                pl: 6,
              }}
            >
 Project Highlights:   Key features of the development.
Overview:    Detailed project information.
            </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "22px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Price Details:    Transparent pricing and unit options.
Amenities:    List of available facilities.

            </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "22px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Gallery:    Visual tour with images.
Location Advantages:    Benefits of the strategic location.
Walkthrough Video:     Virtual tour of the property.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"40px"},

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>


      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:15}}}>
          <img
            src={ShopInStyle}
            alt="not found"
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
              Dynamic Card-Based UI for Product Display
            </Typography>
          </Grid>

          <Grid item xs={12} md={11}>
          <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
               Developed a dynamic card-based user interface for product display, designed to enhance user interaction and provide a seamless shopping experience. Each card showcases a product image, description, and a user-friendly "Add to Cart" button, allowing users to easily select and add items to their cart. The design features a clean layout with engaging visuals and clear typography, optimized for both desktop and mobile devices. The UI was built using modern web technologies, focusing on responsive design principles to ensure a consistent experience across all screen sizes.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md:30}}}>
          <img
            src={EkartImage}
            alt="not found"
            style={{ width: "100%",height:"80%" }}
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
              EKart Project
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
            The eKart project is a user-friendly e-commerce platform that allows users to search for mobile phones and other products easily
            </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Home:    This is the landing page where users can see featured products, new arrivals, and promotional offers. It provides a quick overview of the latest and most popular mobile phones available.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Shop:     This section allows users to browse through a wide range of mobile phones and accessories. Users can apply filters to narrow down their search based on brand, price, features, and more, making it easier to find the perfect mobile phone.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >

Cart:    The cart page shows all the items a user has added to their cart. Users can review their selected items, adjust quantities, or remove items before proceeding to checkout.
            </Typography>


            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Login:     This page allows existing users to sign in to their accounts. It ensures secure access to their purchase history, saved items, and personalized recommendations.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Signup:    New users can create an account to start shopping. The signup process is simple and quick, requiring basic information to enhance the user experience.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"20px"}

              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
       


      <Grid container item xs={12}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 28 }, pb:{xs:0,md:15},pt:{xs:0,md: 20}}}>
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
              Iraki Technologies Company Profile
            </Typography>
          </Grid>

          <Grid item xs={12} md={10}>
          <Typography
              sx={{
                fontSize: { xs: "17px", md: "22px" },
                textAlign: "left",
                pl: 6,
              }}
            >
             This project is a company profile website for Iraki Technologies, designed to showcase the company's values and offerings.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
            About Us: An overview of Iraki Technologies, its history, and expertise in the tech industry.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Core Values: Highlights the fundamental principles and ethical standards that drive the company.
            </Typography>

            
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Our Mission: Describes the company's goals and commitment to delivering innovative technology solutions.

            </Typography>

            
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Gain Success with Us: An invitation for potential clients to partner with Iraki Technologies for achieving business success through tech innovation.
            </Typography>

            
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
Get a Quotation with Us: A feature that allows visitors to request customized service quotes easily.
            </Typography>
          </Grid>
          <Grid item xs={8} md={5} sx={{ mt: {xs: 2,md:5} }}>
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
                mb:{xs:"40px",md:"0"},
                ml:{xs:"0",md:"45px"}

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
