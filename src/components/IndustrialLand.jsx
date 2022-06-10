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

function IndustialLand() {
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
              src="https://www.xentice.com/static/media/land_lease.7ccc6444.png"
              width="30"
              height="30"
              
            />
            <div style={{paddingLeft:"10px"}}>
            <Typography variant="h6" component="div">Industrial Land</Typography>
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/phgutpOcYQaxxDFIk91sT5wIJ9lknxtaGkTu9GJP.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              GREEN VALLEY
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Noida
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 7000/Sqr.ft
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/5CJoiusq2Zbi1QuCE7lU3AhGCp2NZNM99Joamx5x.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Dry Land
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Chennai
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

        <div style={card}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/apDQJm8tlXO5pgGwIxoVzqGRvmsG9JNBodb3hhOf.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Terra Firm
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Hyderabad
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 6000/Sqr.ft
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
              image="https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/04bGPRsEKLO0Jz1U7bdmHMtOKqndtTwjZJr5T2zh.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Complot
              </Typography>
              <div style={{ display: "flex" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="body2" color="text.secondary">
                Mumbai
                </Typography>
              </div>
              <Typography variant="body2" color="red">
              Rs 7000/Sqr.ft
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

export default IndustialLand;
