import React from 'react';
import './style.css';
import Photo from '../../assets/photos/productlarger.png';

function ProductSmall(props) {
  return (
    <div className="contentProductSmall">
      <img src={Photo} alt={props.title} />
      <h3>{props.title}</h3>
      {props.promo ? (
        <div className="saleProductSmall">
          <p> {`R$ ${props.price},00`}</p>
          <p> {`R$ ${props.promo},00`}</p>
        </div>
      ) : (
        <p>{`R$ ${props.price},00`}</p>
      )}
    </div>
  );
}
export default ProductSmall;