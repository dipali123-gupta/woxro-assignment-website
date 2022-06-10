import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import LOGO from "./Image-resource/LOGO.png";

export default function ButtonAppBar() {
  const img = <img style={{ marginTop: 10 }} src="./Image-resource/LOGO.png" />;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "70px", backgroundColor: "white" }}
      >
        {/* <Box
          component="img"
          sx={{
            height: 64,
            width: 130,
            paddingLeft: 8,
          }}
          alt=""
          src={LOGO}
        /> */}
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{paddingLeft:"50px"}}>
          <img src={LOGO} width="140" height="60" style={{margin:"0px"}}/>
          </div>
          <div>
            <Button sx={{marginTop:"20px", color:"black"}}> Post Ad</Button>
            <Button sx={{marginTop:"20px", color:"black"}}> Near Me</Button>
            <Button sx={{marginTop:"20px", color:"black"}}> Login/Sign Up</Button>
          </div>
        </div>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
        </Toolbar>


      </AppBar>
    </Box>
  );
}

