import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import InputYear from '../components/InputYear/InputYear';
import Controls from '../components/Controls/Controls';
import classNames from 'classnames';
import { useControls } from '../hooks/useControls';

const Main = () => {
  const { calendarType } = useControls();

  return (
    <div className={classNames('container', calendarType)}>
      <div className="content_top">
        <div className="top_inner">
          {/* Input Year */}
          <InputYear />
        </div>
      </div>
      <div className="content_body">
        {/* Calendar */}
        <Calendar type={calendarType} />
        <Controls />
      </div>
    </div>
  );
};

export default Main;
