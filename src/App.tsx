import React from 'react';
import { RecoilRoot } from 'recoil';
import Calendar from './components/Calendar/Calendar';
import InputYear from './components/InputYear/InputYear';
import './styles/style.scss';

function App() {
  return (
    <RecoilRoot>
      {/* <div className="aside">Calendar Option</div> */}
      <div className="container">
        <div className="content">
          {/* Input Year */}
          <InputYear />
          {/* Calendar */}
          <Calendar />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
