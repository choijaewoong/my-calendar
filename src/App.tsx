import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import Main from './pages/main';
import './styles/style.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#283593',
      dark: '#1c2566',
      light: '535da8',
    },
    secondary: {
      main: '#ffa000',
      dark: '#b27000',
      light: '#ffb333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
