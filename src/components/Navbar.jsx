import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import LOGO from './Image-resource/LOGO.png'

export default function ButtonAppBar() {

    const img = <img style={{marginTop: 10}} src="./Image-resource/LOGO.png"/>
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '75px', backgroundColor:"white"}}>
      <Box
            component="img"
            sx={{
            height: 64,
            width: 130,
            paddingLeft: 8,
            }}
            alt=""
            src={LOGO}
        />
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          
         
          
          <Button styles={{color:"blue" , backgroundColor: "#FFFFFF"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
