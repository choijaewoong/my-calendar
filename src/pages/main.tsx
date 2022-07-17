import React, { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import InputYear from '../components/InputYear/InputYear';
import Controls from '../components/Controls/Controls';
import ControlsButton from '../components/ControlsButton/ControlsButton';
import classNames from 'classnames';

const Main = () => {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);

  return (
    <div className={classNames('container', isSideOpen && 'side_open')}>
      <div className="content">
        {/* Input Year */}
        <InputYear />
        {/* Calendar */}
        <Calendar />
      </div>
      <Controls />
    </div>
  );
};

export default Main;
