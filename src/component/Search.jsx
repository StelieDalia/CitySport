import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { color } from '@mui/system';
import { green } from '@mui/material/colors';


export default function Search({setSearchTerm, handleSearchTerm}) {
  const handleChange = () => {
    let value = document.getElementById('search').value;
    setSearchTerm(value)
  }

  return (
    <div className='searchbox'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '77vw', },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="search" label="Que recherchez-vous?" onChange={handleChange}  variant="outlined" />
        </Box>
        <Stack direction="row" spacing={1} >
          <Button variant="contained" endIcon={<SearchIcon />} onClick = {handleSearchTerm} sx={{backgroundColor: '#009044', borderRadius: '40px'}}>
            Rechercher
          </Button>
        </Stack>
    </div>
  );
}
