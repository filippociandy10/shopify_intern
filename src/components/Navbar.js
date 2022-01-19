import React from "react";
import { Link } from "react-router-dom";
import logo from "../rocket.svg";
import { IconButton, AppBar, Toolbar, Box, Typography } from "@mui/material/";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#263238" }}>
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Link to="/">
            <img
              style={{ height: "50px", width: "50px" }}
              src={logo}
              alt="Rocket Logo"
              className="logo"
            />
          </Link>
          <Typography sx={{ m: 2 }} align="right">
            {" "}
            Spacestagram{" "}
          </Typography>{" "}
        </Box>
        <Link to="/">
          <Typography color="#FFFFFF" sx={{ m: 2 }} align="right">
            {" "}
            Home
          </Typography>
        </Link>
        <Link to="/favorites">
          <Typography color="#FFFFFF"> Favorites</Typography>
        </Link>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
