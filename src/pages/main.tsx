import React, { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import InputYear from '../components/InputYear/InputYear';
import Controls from '../components/Controls/Controls';
import ControlsButton from '../components/ControlsButton/ControlsButton';
import classNames from 'classnames';
import { useControls } from '../hooks/useControls';

const Main = () => {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const { calendarType } = useControls();

  return (
    <div className={classNames('container', isSideOpen && 'side_open', calendarType)}>
      <div className="content">
        {/* Input Year */}
        <InputYear />
        {/* Calendar */}
        <Calendar type={calendarType} />
      </div>
      <ControlsButton
        handleControls={() => {
          setIsSideOpen(!isSideOpen);
        }}
      />
      <Controls />
    </div>
  );
};

export default Main;