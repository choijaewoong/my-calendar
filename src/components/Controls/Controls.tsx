import React, { FC } from 'react';
import styles from './Controls.module.scss';

const Controls: FC = () => {
  return (
    <div className={styles.controls_wrap}>
      <div className={styles.controls_inner}>
        <em>Controls</em>
      </div>
    </div>
  );
};

export default Controls;
