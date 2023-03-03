import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import About from './components/About';
import Contact from './components/Contact';
import OnBoard from './components/OnBoard';
import Price from './components/Price';

function Home() {
  return (
    <Box>
      <Header />
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