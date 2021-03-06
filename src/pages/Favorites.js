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
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Favorites({ setFavorites, favorites }) {
  const unlikePicture = (image) => {
    var arr = [...favorites];
    var index = arr.indexOf(image);
    if (index !== -1) {
      arr.splice(index, 1);
      setFavorites(arr);
    }
    console.log(arr);
  };
  return (
    <Container maxWidth="md">
      <Grid>
        <Grid item xs={12}>
          {favorites.map((image) => (
            <Box>
              <Card sx={({ maxWidth: 600 }, { m: 2 })}>
                <CardMedia
                  component="img"
                  height="500"
                  image={image.url}
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
                      <IconButton onClick={() => unlikePicture(image)}>
                        <FavoriteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
