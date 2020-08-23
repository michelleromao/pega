import React from 'react';
import './style.css';
import Photo from '../../assets/photos/productlarger.png';
import { Link } from 'react-router-dom';

function ProductSmall(props) {
  return (
    <div className="contentProductSmall">
      <Link to="/anuncio">
        <img src={props.photoProductSmall} alt={props.title} />
        <h3>{props.title}</h3>
        {props.promo ? (
          <div className="saleProductSmall">
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
export default ProductSmall;
