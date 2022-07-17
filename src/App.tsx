import React from 'react';
import { RecoilRoot } from 'recoil';
import Main from './pages/main';
import './styles/style.scss';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
