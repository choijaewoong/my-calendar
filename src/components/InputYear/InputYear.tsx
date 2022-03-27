import React, { FC } from 'react';
import VInputYear from './VInputYear';

type Props = {
  year: number;
  setYear: (n: number) => void;
};
const InputYear: FC<Props> = (props) => {
  const { year, setYear } = props;
  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.valueAsNumber);
  };
  const newProps = {
    year,
    handleYear,
  };

  return <VInputYear {...newProps} />;
};

export default InputYear;
