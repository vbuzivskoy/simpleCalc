import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const CalcButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('orangeBtn', className);

  return (
    <Button
      title="="
      className={classNames}
      onClick={() => dispatch({
        type: 'calculating',
      })}
    />
  );
};

export default CalcButton;
