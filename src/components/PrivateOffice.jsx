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

function PrivateOffice() {
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
              src="https://cdn-icons-png.flaticon.com/512/3014/3014102.png"
              width="30"
              height="30"
              
            />
            <div style={{paddingLeft:"10px"}}>
            <Typography variant="h6" component="div">Private Office</Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/NkL9TECyCAZQtvO3YcBXZy5ebzmba5l9XJYxCvCb.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Team sus
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/Y8DLJWlhmO1AYWByN7u1aJp11OeiOkytA9Y1p3wG.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Click collab
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
              image="https://questworkspaces.com/wp-content/uploads/2020/03/private-office-coronavirus-social-distancing.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Your space
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

        <div style={card}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn2.hubspot.net/hubfs/2917278/Blog%20Images/Overland%20Park-3_4_19-5%20Perks%20of%20a%20Private%20Office%20Space.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Align High
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Hyderabad
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

export default PrivateOffice;
