import React, { useState } from 'react';
import { Button } from './style';
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
      return hover ? <Shirt color="#BE5599" /> : <Shirt color="#797979" />;
    }
    if (icon == 'bag') {
      return hover ? <Bag color="#BE5599" /> : <Bag color="#797979" />;
    }
    if (icon == 'offer') {
      return hover ? <Offer color="#BE5599" /> : <Offer color="#797979" />;
    }
    if (icon == 'fav') {
      return hover ? <Fav color="#BE5599" /> : <Fav color="#797979" />;
    }
    if (icon == 'heart') {
      return hover ? <Heart color="#BE5599" /> : <Heart color="#797979" />;
    }
  };

  return (
    <Button onMouseEnter={onMouseEnterHandle} onMouseLeave={onMouseLeaveHandle}>
      {changeIconHandle(props.icon)}
      <p>{props.nameCategory}</p>
    </Button>
  );
}
export default ButtonCategory;
