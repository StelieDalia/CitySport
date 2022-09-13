import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
  return (
    <div className='Search'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75vw'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Rechercher une chaussure" variant="outlined" />
    </Box>

    <Stack spacing={2} direction="row" className='button'>
    <Button variant="contained" sx={{height: 56}} >Rechercher</Button>
    </Stack>
    </div>
  );
}
