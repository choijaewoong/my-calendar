import React, { FC, useEffect, useState } from 'react';
import styles from './Controls.module.scss';
import { useControls } from '../../hooks/useControls';

const Controls: FC = () => {
  const { setCalendarType } = useControls();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }
  const controlsStyle = { height: useWindowDimensions().height - 160 } as React.CSSProperties;

  return (
    <div className={styles.controls_wrap} style={controlsStyle}>
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
