import React, { useState } from 'react';
import './style.css';
import Heart from '../../../assets/icons/coracaorosa.svg';
import Gift from '../../../assets/icons/presente.svg';
import CoatHanger from '../../../assets/icons/cruzeta.svg';

function ProductInformation(props) {
  const delivery = props.delivery;
  const method = props.method;

  let textDelivery;
  let textMethod;
  let statusReceive;

  if (delivery.length == 2) {
    textDelivery = `${delivery[0]} ou ${delivery[1]}`;
  } else {
    textDelivery = `${delivery[0]}`;
    if (textDelivery == 'Entrega em mãos') {
      statusReceive = true;
    }
  }
  if (method.length == 3) {
    textMethod = `No ${method[0]}, ${method[1]} ou ${method[2]}`;
  } else if (method.length == 2) {
    textMethod = `No ${method[0]} ou ${method[1]}`;
  } else {
    textMethod = `No ${method[0]}`;
  }

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
          {textDelivery}
        </p>
        {props.fitting ? (
          <p>
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
        <p className="method">{textMethod}</p>
      </div>
      <button className="btnBuy">Comprar</button>
      {statusReceive ? (
        <p className="receive">
          não é possivel adicionar o produto na sacola, pois você pode apenas
          retirar o produto em mãos.
        </p>
      ) : (
        <button className="btnCart">Adicionar ao carrinho</button>
      )}
    </div>
  );
}
export default ProductInformation;
