import React, { FC } from 'react';
import styles from './Controls.module.scss';
import { useControls } from '../../hooks/useControls';

const Controls: FC = () => {
  const { setCalendarType } = useControls();

  return (
    <div className={styles.controls_wrap}>
      <div className={styles.controls_inner}>
        <label htmlFor="default">
          Default
          <input id="default" type="radio" name="calendarType" onChange={() => setCalendarType('')} />
        </label>
        <label htmlFor="vertical">
          Vertical
          <input id="vertical" type="radio" name="calendarType" onChange={() => setCalendarType('type_vertical')} />
        </label>
      </div>
    </div>
  );
};

export default Controls;
