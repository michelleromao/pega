import React from 'react';
import './style.css';
import Photo from '../../assets/photos/productlarger.png';

function ProductLarger(props) {
  return (
    <div className="contentProductLarger">
      <img src={Photo} alt={props.title} />
      <h3>{props.title}</h3>
      {props.promo ? (
        <div className="sale">
          <p className="promo"> {`R$ ${props.price},00`}</p>
          <p className="price"> {`R$ ${props.promo},00`}</p>
        </div>
      ) : (
        <p className="price">{`R$ ${props.price},00`}</p>
      )}
    </div>
  );
}
export default ProductLarger;
