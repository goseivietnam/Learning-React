import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
type HandleChangeType = {
  handleChange: Function
}
export default function SearchBox({ handleChange }: HandleChangeType) {


  return (
    <Box sx={{ width: '100%' }}>
      <TextField sx={{ width: '100%' }} id="standard-basic" label="Standard" variant="standard" onChange={(e) => { handleChange(e.target.value) }} />
    </Box>
  );
}