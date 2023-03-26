import React from 'react';
import './App.css';
import { StyledEngineProvider } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './typography/poppins';
import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';

function App() {
  
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <LandingPage />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
