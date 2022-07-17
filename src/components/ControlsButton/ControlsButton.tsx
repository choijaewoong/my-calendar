import React, { FC } from 'react';
import styles from './ControlsButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {
  handleControls: () => void;
};

const ControlsButton: FC<Props> = (props) => {
  const { handleControls } = props;
  return (
    <button className={styles.button_control} aria-label="controls open button" onClick={handleControls}>
      <FontAwesomeIcon icon={solid('chevron-left')} />
    </button>
  );
};

export default ControlsButton;
