import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import Pages from "../components/Pages";

export default function Home({data}) {
  console.log(data)
  return(
    <h1>
        {data.map((image)=>
        <Pages data = {image}/>
        )}
    </h1>
      )
  }
  