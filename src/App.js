import React from "react";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import Button from '@mui/material/Button';
// import pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
//import components
import Navbar from "./components/Navbar";


function App() {
  const [main, setMain] = useState(true) //If user is currently in main page 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [year, setYear] = useState(2000)

  const getData = async() =>{
    try {
      if (main){
        const url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&count=15`
      }
      else{
        const url = `https://api.nasa.gov/planetary/apod?api_key=lYOcIYZx1dE9HcZHcx96YYvGmPncGkXQbgTBYUDO&start_date=${year}-01-01&end_date=${year}-01-15&thumbs='True'`
      }
      const {example} = await axios.get(url) 
      setData(example)
      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </Router>
  )
}

export default App;
