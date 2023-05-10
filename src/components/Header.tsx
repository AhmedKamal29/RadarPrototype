import React from 'react';
import Box from '@mui/material/Box';
import Navigation from './Navigation/Navigation';
import Typography from '@mui/material/Typography';

const Header = () => {

  const ToolTitle: string = `Orange Radar Prototype`;

  return (
    <Box>
        <Navigation />
        <Typography variant="h3" sx={{ml: 20, mt:5}} gutterBottom>{ToolTitle} <span className='text-gray-400'>V0.0</span></Typography>
    </Box>
  );
};

export default Header;
