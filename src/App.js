import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Explore from "./components/Explore";
//import components
import Navbar from "./components/Navbar";
import { CssBaseline, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#263238",
      },
      secondary: {
        main: "#4f5b62",
      },
      background: {
        default: "#263238",
      },
    },
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const getData = async () => {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&count=5`;
      const resp = await axios.get(url);
      const images = resp.data;
      setData(resp.data);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };

  const LoadNewPage = () => {
    setLoading(true);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <Explore
                favorites={favorites}
                setFavorites={setFavorites}
                data={data}
                LoadNewPage={LoadNewPage}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites setFavorites={setFavorites} favorites={favorites} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
