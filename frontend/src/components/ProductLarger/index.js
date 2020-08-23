import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function ProductLarger(props) {
  return (
    <div className="contentProductLarger">
      <Link to="/anuncio">
        <img src={props.photoProductLarger} alt={props.title} />
        <h3>{props.title}</h3>
        {props.promo ? (
          <div className="sale">
            <p className="promo"> {`R$ ${props.price},00`}</p>
            <p className="price"> {`R$ ${props.promo},00`}</p>
          </div>
        ) : (
          <p className="price">{`R$ ${props.price},00`}</p>
        )}
      </Link>
    </div>
  );
}
export default ProductLarger;
