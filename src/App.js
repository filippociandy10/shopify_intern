import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
// import pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
//import components
import Navbar from "./components/Navbar";
import ButtonYear from "./components/ButtonYear";
import Pages from "./components/Pages";

function App() {
  const [main, setMain] = useState(true); //If user is currently in main page
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(2000);

  const getData = async () => {
    try {
      let url;
      if (main) {
        url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&count=3`;
      } else {
        url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&start_date=${year}-01-01&end_date=${year}-01-04&thumbs='True'`;
      }
      // before
      // const {parsed_data} = await axios.get(url)
      const resp = await axios.get(url);
      console.log(resp);
      setData(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const changeYear = (YearAfter) => {
    setYear(YearAfter);
    setMain(false);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, [year]);

  return (
    <Router>
      <Navbar />
      <ButtonYear changeYear={changeYear} />
      <Home data={data} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home data={data} loading={loading} />}
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
