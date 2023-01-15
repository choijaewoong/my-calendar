import React, { FC, useEffect, useState } from 'react';
import styles from './Controls.module.scss';
import { useControls } from '../../hooks/useControls';
import { controlsType } from 'types/controls';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const Controls: FC = (props) => {
  const { calendarType, setCalendarType } = useControls();
  const { fontType, setFontType } = useControls();
  const { children } = props;

  const handleCalendarType = (event: React.MouseEvent<HTMLElement>, value: controlsType['calendarType']) => {
    if (value !== null) {
      setCalendarType(value);
    }
  };
  const handleFontType = (event: React.MouseEvent<HTMLElement>, value: controlsType['fontType']) => {
    if (value !== null) {
      setFontType(value);
    }
  };

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
      {children}
      <div className={styles.controls_inner}>
        <em className={styles.name}>Calendar Type</em>
        <ToggleButtonGroup size="small" color="primary" value={calendarType} exclusive onChange={handleCalendarType}>
          <ToggleButton value="">Default</ToggleButton>
          <ToggleButton value="type_vertical">Vertical</ToggleButton>
          <ToggleButton value="type_mini">Mini</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={styles.controls_inner}>
        <em className={styles.name}>Font Type</em>
        <ToggleButtonGroup size="small" color="primary" value={fontType} exclusive onChange={handleFontType}>
          <ToggleButton value="lineseed">고딕체</ToggleButton>
          <ToggleButton value="gowunbatang">명조체</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Controls;
