import './App.css';
import { StyledEngineProvider } from '@mui/system';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
      <Header />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
