import React from 'react';
import orangelogo from "../../assets/logos/OrangeWhite.png"
import Box from '@mui/material/Box'

const Logo = () => {
  return (
    <Box>
      <div>
          <img src={orangelogo} alt="Logo" className='w-40 h-16' />
      </div>
    </Box>
  )
}

export default Logo