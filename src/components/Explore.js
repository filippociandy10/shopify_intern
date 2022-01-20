import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material/";

import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Waypoint } from "react-waypoint";
import CircularProgress from "@mui/material/CircularProgress";

const Explore = ({ setFavorites, data, LoadNewPage, favorites }) => {
  const isLike = (image) => {
    return favorites.includes(image);
  };
  const likeImage = (image) => {
    setFavorites((OldFavorites) => [...OldFavorites, image]);
  };
  return (
    <Container maxWidth="md">
      <Grid>
        <Grid item xs={12}>
          {data.map((image) => (
            <Box>
              <Card sx={({ maxWidth: 600 }, { m: 2 })}>
                <CardMedia
                  component="img"
                  height="500"
                  image={
                    image.media_type === "image"
                      ? image.url
                      : image.thumbnail_url
                  }
                  alt={image.title}
                  resizeMode="contain"
                />
                <Typography sx={{ p: 2, fontSize: 25 }}>
                  {" "}
                  {image.title}{" "}
                </Typography>
                <Typography sx={{ p: 2, fontSize: 18 }}>
                  {image.explanation}
                </Typography>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography sx={{ p: 2 }}> {image.date}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 1,
                      }}
                    >
                      <IconButton onClick={() => likeImage(image)}>
                        {isLike(image) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Grid>
        <Waypoint onEnter={LoadNewPage}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="secondary" />
          </Box>
        </Waypoint>
      </Grid>
    </Container>
  );
};

export default Explore;
