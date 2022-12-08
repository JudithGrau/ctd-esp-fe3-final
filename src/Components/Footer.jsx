import React from 'react'
import IconButton from '@mui/material/IconButton';
import { Toolbar, Tooltip } from '@mui/material';
import { socialNetwork } from './socialNetwork';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const Footer = () => {
  return (
    <footer>
      <Box><img src="./images/DH.png" alt='DH-logo' /></Box>
      <Box>
      {
            socialNetwork.map(({ linkto, snTitle, Icon }) => (
              
                <Tooltip key={snTitle} title={snTitle}>
                  <IconButton >
                    <a  style={{color:"#000"}} href={linkto} target="e_blank" rel="nonreferrer"><Icon /></a>
                  </IconButton>
                </Tooltip>
              
            ))
          }
        </Box>
    </footer>
  )
}

export default Footer
