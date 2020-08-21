import React, { useState } from 'react';
import './style.css';
import Shirt from '../../assets/icons/Camisa';
import Offer from '../../assets/icons/Etiqueta';
import Bag from '../../assets/icons/Bolsa';
import Fav from '../../assets/icons/Estrela';
import Heart from '../../assets/icons/Coracao';

function ButtonCategory(props) {
  const [hover, setHover] = useState(false);

  const onMouseEnterHandle = () => {
    setHover(true);
  };
  const onMouseLeaveHandle = () => {
    setHover(false);
  };

  const changeIconHandle = (icon) => {
    if (icon == 'shirt') {
      return hover ? (
        <Shirt color="#BE5599" className="icon" />
      ) : (
        <Shirt color="#797979" className="icon" />
      );
    }
    if (icon == 'bag') {
      return hover ? (
        <Bag color="#BE5599" className="icon" />
      ) : (
        <Bag color="#797979" className="icon" />
      );
    }
    if (icon == 'offer') {
      return hover ? (
        <Offer color="#BE5599" className="icon" />
      ) : (
        <Offer color="#797979" className="icon" />
      );
    }
    if (icon == 'fav') {
      return hover ? (
        <Fav color="#BE5599" className="icon" />
      ) : (
        <Fav color="#797979" className="icon" />
      );
    }
    if (icon == 'heart') {
      return hover ? (
        <Heart color="#BE5599" className="icon" />
      ) : (
        <Heart color="#797979" className="icon" />
      );
    }
  };

  return (
    <button
      className="buttonCategory"
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {changeIconHandle(props.icon)}
      <p>{props.nameCategory}</p>
    </button>
  );
}
export default ButtonCategory;
