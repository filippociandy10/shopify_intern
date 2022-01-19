import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Home = ({ data }) => {
  // console.log(data);
  return (
    <Grid container>
      <Grid item xs={6}>
        {data.map((images) => (
          <Box>
            <img src={images.url} />
            <Typography>{images.explanation}</Typography>
            <Typography>{images.data}</Typography>
            <Typography> {images.date}</Typography>
            <IconButton>
              {" "}
              <FavoriteIcon />{" "}
            </IconButton>
          </Box>
        ))}
      </Grid>
    </Grid>
    // <Card
    //   sx={{
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //   {data.map((images) => (

    //   ))}
    // </Card>
  );
};
//  <CardMedia>
//     <CardContent>
//       <img src={images.url} />
//       <Typography> {images.title} </Typography>
//       <Grid container>
//         <Grid item xs={10}>
//           <Typography> {images.explanation} </Typography>
//         </Grid>
//       </Grid>
//       <Grid item xs={2}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end",
//             p: 1,
//           }}
//         >
//           <Typography> {images.date}</Typography>
//           <IconButton aria-label="like">
//             <FavoriteIcon />
//           </IconButton>
//         </Box>
//       </Grid>
//     </CardContent>
//   </CardMedia>
export default Home;
