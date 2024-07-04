import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Contact() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ height: "auto", pt: { xs: 5, md: 15 }, pb: 30, }}
    >
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: { xs: "30px", md: "40px" }, fontWeight: "bold" }}
          >
            CONTACT
          </Typography>
        </Grid>

        <Grid item xs={10} md={6}>
          <Typography sx={{ fontSize: { xs: "20px", md: "22px" }, pt: 5, pb: 10 }}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "center", pb: 20 }}
      >
        <Grid
          item
          xs={10}
          md={6}
          sx={{
            border: "1px solid black",
            borderRadius: "9px",
            pl: { xs: 2, md: 6 },
            pb: 5,
          }}
        >
          <Grid item xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                textAlign: "left",
                pt: 4,
                pb: 2,
              }}
            >
              Name
            </Typography>

            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Name"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                textAlign: "left",
                pt: 4,
                pb: 2,
              }}
            >
              Email
            </Typography>

            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Email"
              sx={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={11}>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                textAlign: "left",
                pt: 4,
                pb: 2,
              }}
            >
              Message
            </Typography>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  placeholder="Enter Your Message"
                  multiline
                  rows={10}
                  sx={{ width: "100%" }}
                />
              </div>
            </Box>
          </Grid>

          <Grid item xs={11} sx={{ mt: 5, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{ padding: "13px 80px", fontSize: "20px" }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
