import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import InputYear from './components/InputYear/InputYear';
import { useYear } from './hooks/useCalendar';
import './styles/style.scss';

function App() {
  const { year, handleYear } = useYear();
  return (
    <>
      {/* <div className="aside">Calendar Option</div> */}
      <div className="container">
        <div className="content">
          {/* Input Year */}
          <InputYear year={year} handleYear={handleYear} />
          {/* Calendar */}
          <Calendar year={year} />
        </div>
      </div>
    </>
  );
}

export default App;
