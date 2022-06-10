import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Select, MenuItem, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, position:"absolute", top:"250px", left:"210px", padding:"20px" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"600"}}>
          Choose from 25,00+<br/> Spaces for your <br/> Business
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:"100"}}>
          Get inspired and find your perfect place
          </Typography>
        </CardContent>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"5"}
            label="name"
            fullWidth
            sx={{marginBottom:"20px"}}
        >
     
            <MenuItem value={5}>Looking for</MenuItem>
            <MenuItem value={10}>Commercial Shop</MenuItem>
            <MenuItem value={20}>Commercial Building </MenuItem>
            <MenuItem value={30}>Commercial Land</MenuItem>
            <MenuItem value={40}>Commercial Space </MenuItem>
            <MenuItem value={50}>Co-Working Space </MenuItem>
            <MenuItem value={60}>Industrial Land</MenuItem>
            <MenuItem value={70}>Meeting Room</MenuItem>
            <MenuItem value={80}>Private Ofice</MenuItem>
        </Select>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"5"}
            labe="name"
            fullWidth
            sx={{marginBottom:"20px"}}
            
        >
            <MenuItem value={5}>Select City</MenuItem>
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Hydyabad </MenuItem>
            <MenuItem value={40}>Noida</MenuItem>
            <MenuItem value={50}>Bangalore</MenuItem>
            <MenuItem value={60}>Cochin</MenuItem>
            <MenuItem value={70}>Chennai</MenuItem>
=        </Select>
        <Button sx={{background:"#012B72", color:"white"}} fullWidth>Submit</Button>
      </CardActionArea>
    </Card>
  );
}
