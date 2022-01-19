import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export default function Pages({ data, loading }) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return (
    <div>
      <Card>
        <CardContent>
          <img
            src={data.url}
            alt={data.title}
            style={{
              width: "80%",
              height: "70%",
            }}
          ></img>
          <Typography> {data.title} </Typography>
          <Typography> {data.explanation} </Typography>
          <Typography> {data.date} </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
