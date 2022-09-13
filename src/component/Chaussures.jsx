import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jordan from './jordan.jpg';
import axios from 'axios';
import React, { useState, useEffect } from "react";



export default function Chaussures() {
  
    const [chaussures, setChaussures] = useState([]);
  
    useEffect(() => {
      getChaussures();
    }, []);
  
    const getChaussures = async () => {
      const response = await axios.get("http://localhost:4000/api/chaussures");
      setChaussures(response.data);
    };
  
  

  const [Pointure, setPointure] = React.useState('');

  const handleChangePointures = (event) => {
    setPointure(event.target.value);
  };

  const [Marques, setMarques] = React.useState('');

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

  return (
    <div className='chaussuresBox'>
        <div className='Selects'>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200 }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pointure</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Pointure}
              label="Age"
              onChange={handleChangePointures}
              >
              <MenuItem value={10}>Toutes</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={41}>41</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={39}>39</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              </Select>
          </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginRight: 3, width: 200  }}>
          <FormControl fullWidth>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Marques}
              label="Age"
              onChange={handleChangeMarques}
          >
              <MenuItem value={10}>Marques</MenuItem>
              <MenuItem value={1}>Adidas</MenuItem>
              <MenuItem value={2}>Nike</MenuItem>
              <MenuItem value={3}>Puma</MenuItem>
              <MenuItem value={4}>Converse</MenuItem>

          </Select>
          </FormControl>
          </Box>
        </div>
        
        <div className='Chaussures'>
        {chaussures.map((chaussure) => {
          return(
          <Card sx={{ width: 280, marginBottom: 5 }}  key={chaussure.nom_chaussure}>
        <CardMedia
          component="img"
          height="140"
          image={chaussure.images}
          alt={chaussure.images}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {chaussure.nom_chaussure}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Acheter</Button>
          <Button size="small">Ajouter au panier</Button>
        </CardActions>
          </Card>)})}
          <Card sx={{ width: 280, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={jordan}
          alt="jordan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NIKE AIR JORDAN 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Acheter</Button>
          <Button size="small">Ajouter au panier</Button>
        </CardActions>
          </Card>
          <Card sx={{ width: 280, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={jordan}
          alt="jordan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NIKE AIR JORDAN 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Acheter</Button>
          <Button size="small">Ajouter au panier</Button>
        </CardActions>
          </Card>
          <Card sx={{ width: 280, marginBottom: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={jordan}
          alt="jordan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NIKE AIR JORDAN 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Acheter</Button>
          <Button size="small">Ajouter au panier</Button>
        </CardActions>
          </Card>
        </div>
        
    </div>

  );
}
