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

function CommercialOffice() {
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
              src="https://www.xentice.com/static/media/commercial_office.b0884622.png"
              width="30"
              height="30"
              
            />
            <div style={{paddingLeft:"10px"}}>
            <Typography variant="h6" component="div">Commercial Office</Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Bone Avenue
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Cochin
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 15000/Sqr.ft
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/BWlKwndgviHclHru4phGKj9bxthZpKca0U9XKzlw.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Avenue
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Bangalore
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 3000/Sqr.ft
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/GnDFpvqTPcCSaMLFdlam8RjBNaKLvupWrCgz9Xx3.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Office
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Chennai
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 9000/Sqr.ft
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/tqovl04rCW2CHGd5HPPfgjVPCXbRqHxWC5qOae80.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Evans office
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                  Hyderabad
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 10000/Sqr.ft
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

export default CommercialOffice;
