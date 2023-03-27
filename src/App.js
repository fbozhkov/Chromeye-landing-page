import React, {useState, useEffect} from 'react';
import './App.css';
import { StyledEngineProvider } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './typography/poppins';
import { apiCall } from './apiCall';
import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <LandingPage />
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
