import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { createTheme } from "@mui/material/styles";
// import pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
//import components
import Navbar from "./components/Navbar";
import { CssBaseline, Typography } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#263238",
      },
      secondary: {
        main: "#4f5b62",
      },
    },
  });

  const [home, setHome] = useState(true); //If user is currently in main page
  const [data, setData] = useState([[]]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(2000);

  const getData = async () => {
    let url;
    try {
      if (home) {
        url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&count=15`;
      } else {
        url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&start_date=${year}-01-01&end_date=${year}-01-15&thumbs='True'`;
      }
      const resp = await axios.get(url);
      const images = resp.data;
      setData(resp.data);
      setLoading(false);
      // console.log(images);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      {/* <Home data={data} /> */}
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
