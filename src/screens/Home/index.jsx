import { Box } from '@mui/material';
import React, { useState } from 'react'
import Header from '../../components/Header';
import About from './components/About';
import Contact from './components/Contact';
import ModalLogin from './components/ModalLogin';
import OnBoard from './components/OnBoard';
import Price from './components/Price';

function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Header handleLogin={handleOpen} />
      <Box sx={styles.container}>
        <div id="board">
          <OnBoard />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pricing">
          <Price />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Box>
      <ModalLogin open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </Box>
  );
}

export default Home

const styles = {
  container: {
    px: {
      xs: "30px",
      md: "40px",
    },
  },
};