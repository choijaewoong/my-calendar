import React from 'react';

import Calendar from './components/Calendar/Calendar';
import InputYear from './components/InputYear/InputYear';
import './styles/style.scss';

function App() {
  return (
    <>
      <div className="aside">{/* Calendar Option */}</div>
      <div className="container">
        {/* Input Year */}
        <InputYear />
        {/* Calendar */}
        <Calendar />
      </div>
    </>
  );
}

export default App;
