import React from 'react';
import './style.css';
import Heart from '../../../assets/icons/coracaorosa.svg';
import Gift from '../../../assets/icons/presente.svg';
import CoatHanger from '../../../assets/icons/cruzeta.svg';

function ProductInformation(props) {
  return (
    <div className="productInformation">
      <div className="titleProductContent">
        <h1>{props.title}</h1>
        <img src={Heart} alt="" />
      </div>
      <div className="productDetails">
        <p>{props.state}</p>
        <p>{`Tamanho: ${props.size}`}</p>
        <p>{props.color}</p>
      </div>
      <div className="productChoices">
        <p>
          <img src={Gift} alt="" />
          {props.delivery}
        </p>
        {props.fitting ? (
          <p>
            {' '}
            <img src={CoatHanger} alt="" />
            Pode provar
          </p>
        ) : (
          false
        )}
      </div>
      <div className="productSale">
        <div className="productPrice">
          {props.promo ? (
            <>
              <p className="promo"> {`R$ ${props.price},00`}</p>
              <p className="price"> {`R$ ${props.promo},00`}</p>
            </>
          ) : (
            <p className="price">{`R$ ${props.price},00`}</p>
          )}
        </div>
        <p className="method">no cartão de credito, boleto ou picpay</p>
      </div>
      <button className="btnBuy">Comprar</button>
      <button className="btnCart">Adicionar ao carrinho</button>
    </div>
  );
}
export default ProductInformation;
