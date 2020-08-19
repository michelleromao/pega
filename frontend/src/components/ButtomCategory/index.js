import React, { useState } from 'react';
import './style.css';
import { ReactComponent as Shirt } from '../../assets/icons/camisacinza.svg';
import { ReactComponent as ShirtHover } from '../../assets/icons/camisarosa.svg';

function ButtomCategory(props) {
  const [hover, setHover] = useState(false);

  const onMouseEnterHandle = () => {
    setHover(true);
  };
  const onMouseLeaveHandle = () => {
    setHover(false);
  };

  return (
    <button
      className="buttonCategory"
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {hover ? <ShirtHover /> : <Shirt />}

      <p>{props.nameCategory}</p>
    </button>
  );
}
export default ButtomCategory;
