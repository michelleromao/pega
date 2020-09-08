import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  ContentTitle,
  ContentDetails,
  ContentChoices,
  ContentSale,
  ContentPrice,
  Promo,
  Price,
  Method,
  Button,
  Receive,
} from './style';
import Heart from '../../../assets/icons/coracaorosa.svg';
import Gift from '../../../assets/icons/presente.svg';
import CoatHanger from '../../../assets/icons/cruzeta.svg';

function ProductInformation(props) {
  const productDetails = useSelector((state) => state);

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
    <Container>
      <ContentTitle>
        <h1>{props.title}</h1>
        <img src={Heart} alt="" />
      </ContentTitle>
      <ContentDetails>
        <p>{props.state}</p>
        <p>{`Tamanho: ${props.size}`}</p>
        <p>{props.color}</p>
      </ContentDetails>
      <ContentChoices>
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
      </ContentChoices>
      <ContentSale>
        <ContentPrice>
          {props.promo ? (
            <>
              <Promo> {`R$ ${props.price},00`}</Promo>
              <Price> {`R$ ${props.promo},00`}</Price>
            </>
          ) : (
            <Promo>{`R$ ${props.price},00`}</Promo>
          )}
        </ContentPrice>
        <Method>{textMethod}</Method>
      </ContentSale>
      <Button btnBuy>Comprar</Button>
      {statusReceive ? (
        <Receive>
          não é possivel adicionar o produto na sacola, pois você pode apenas
          retirar o produto em mãos.
        </Receive>
      ) : (
        <Button>Adicionar ao carrinho</Button>
      )}
    </Container>
  );
}
export default ProductInformation;
