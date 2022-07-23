import React, { FC } from 'react';
import styles from './ControlsButton.module.scss';

type Props = {
  handleControls: () => void;
};

const ControlsButton: FC<Props> = (props) => {
  const { handleControls } = props;
  return (
    <button className={styles.button_control} aria-label="controls open button" onClick={handleControls}>
      <span className={styles.bar} />
    </button>
  );
};

export default ControlsButton;
