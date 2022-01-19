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
import { Waypoint } from "react-waypoint";
import CircularProgress from '@mui/material/CircularProgress';

const Home = ({ data, LoadNewPage, loading }) => {

  return (
    <Container maxWidth="md">
      <Grid>
        <Grid item xs={12}>
          {data.map((images) => (
            <Box>
              <Card sx={{ maxWidth: 600 }, { m: 2 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={images.url}
                  alt={images.title}
                  resizeMode="contain"
                />
                <Typography sx={{ fontSize: 25 }}> {images.title} </Typography>
                <Typography sx={{ fontSize: 18 }}>{images.explanation}</Typography>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography sx={{ p: 2 }}> {images.date}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 1
                    }}>
                      <IconButton>
                        {" "}
                        <FavoriteIcon />{" "}
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Grid>
        <Waypoint onEnter={LoadNewPage}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Waypoint>
      </Grid>
    </Container>
  );
};

export default Home;
