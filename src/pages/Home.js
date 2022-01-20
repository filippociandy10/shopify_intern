import React from "react";
import logo from "../rocket.svg";
import { IconButton, Link, Button, Box, Typography } from "@mui/material/";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <img
          style={{ height: "750px", width: "750px" }}
          src={logo}
          alt="Rocket Logo"
          className="logo"
        />

        <Typography
          sx={{
            fontSize: 40,
            mt: -30,
            ml: 18,
          }}
        >
          {" "}
          Your go-to space app.
        </Typography>
        <Button
          component={RouterLink}
          to="/explore"
          color="secondary"
          sx={{ ml: 35, mt: 2 }}
          variant="contained"
        >
          EXPLORE
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
