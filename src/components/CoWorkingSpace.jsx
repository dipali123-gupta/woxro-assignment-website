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

function CoWorkingSpace() {
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
              src="https://www.xentice.com/static/media/coworking.ae2d86ad.png"
              width="30"
              height="30"
              
            />
            <div style={{paddingLeft:"10px"}}>
            <Typography variant="h6" component="div">Co-working Space</Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/uaDTZNQd1OAry7oEKut1FeRJJJcNRQ9hDmP7UPGF.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Shop
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Cochin
                </Typography>
              </div>
              <Typography variant="body2" color="red">
                Rs 11500/Month
              </Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/H7XfUyO48iZdHN0eHo1Vjx2V3GLtOREbyrjsJ9Z8.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Property
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Chennai
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 12000/Month
              </Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/j5FUmX59wcK2T1Pbc0R6ulT9R4fFU2j9MW4KYziY.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Commercial sto...
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Bangalore
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 9000/Month
              </Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/Z1uCAFE6HfUZH5lX4x6zm2L1peSKvdG8zOjhr40u.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Shop
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Hyderabad
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 16000/Month
              </Typography>
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

export default CoWorkingSpace;
