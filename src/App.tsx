import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import InputYear from './components/InputYear/InputYear';
import './styles/style.scss';

function App() {
  const [year, setYear] = useState(2022);
  return (
    <>
      <div className="aside">{/* Calendar Option */}</div>
      <div className="container">
        <div className="content">
          {/* Input Year */}
          <InputYear year={year} setYear={setYear} />
          {/* Calendar */}
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
