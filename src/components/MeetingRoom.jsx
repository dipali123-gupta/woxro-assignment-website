import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box } from "@mui/system";

function MeetingRoom() {
  const card = {
    display: "flex",
    padding: "15px",
    display: "inline-block",
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Box
          sx={{
            width: 400,
            height: 60,
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" , paddingLeft:"40px" , paddingTop:"45px"}}>
            <img
              src="https://www.xentice.com/static/media/meeting-room.0b5c79ff.png"
              width="30"
              height="30"
              
            />
            <div style={{paddingLeft:"10px"}}>
            <Typography variant="h6" component="div">Meeting Room</Typography>
            </div>
          </div>
        </Box>
      </div>
      <div style={{ display: "flex", paddingLeft: "50px" }}>
        <div style={card}>
          <Card sx={{ width: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/ucd6BR7L4j9ZKBfd1T3oW5j5eg8jyeOPmwU1JThC.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Envice co-worki...
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Chennai
                </Typography>
              </div>
             
            </CardContent>

            <CardActions>
              <Grid container justify="right">
                <Button
                  size="small"
                  styles={{ paddingLeft: "520px", marginLeft: "100px" }}
                >
                  Explore Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </div>

        <div style={card}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/fEMPDSaPBy809px59bMnbvwAItpCvyLfRbwy7Yj9.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Anvico Firm
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Cochin
                </Typography>
              </div>
             
            </CardContent>

            <CardActions>
              <Grid container justify="right">
                <Button
                  size="small"
                  styles={{ paddingLeft: "520px", marginLeft: "100px" }}
                >
                Explore Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </div>

        <div style={card}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://i.pinimg.com/originals/b1/a7/ca/b1a7caa5393b4b940a2e1a5f2abc8e07.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Maker Spot
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Mumbai
                </Typography>
              </div>
              
            </CardContent>

            <CardActions>
              <Grid container justify="right">
                <Button
                  size="small"
                  styles={{ paddingLeft: "520px", marginLeft: "100px" }}
                >
                Explore Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </div>

        <div style={card}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/Q9O8L5RNseVUhSFUCS8YFAqZckSxdLaOJwYABvMX.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Co-work Collisi...
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Bangalore
                </Typography>
              </div>
              
            </CardContent>

            <CardActions>
              <Grid container justify="right">
                <Button
                  size="small"
                  styles={{ paddingLeft: "520px", marginLeft: "100px" }}
                >
                Explore Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default MeetingRoom;
