import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  Frete,
} from './style';
import Heart from '../../../assets/icons/coracaorosa.svg';
import Gift from '../../../assets/icons/presente.svg';
import CoatHanger from '../../../assets/icons/cruzeta.svg';
import { addProductToBag } from '../../../store/modules/bag/action';
import { useHistory } from 'react-router-dom';

function ProductInformation(props) {
  const history = useHistory();
  const productDetails = useSelector((state) => state);
  const dispatch = useDispatch();
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
  const handleBag= () => {
    const announcement = {
      idAnnouncement: props.data[0].idAnnouncement,
      title: props.data[0].title,
      color: props.data[0].color,
      size: props.data[0].size,
      state: props.data[0].state,
      description: props.data[0].description,
      tryOn: props.data[0].tryOn,
      initPrice: props.data[0].initPrice,
      idOwner: props.data[0].idOwner,
      nameOwner: props.data[0].nameOwner,
      telOwner: props.data[0].telOwner,
      idStyle: props.data[0].idStyle,
      idCategory: props.data[0].idCategory,
      deliveryType: props.data[0].deliveryType,
      priceDelivery: props.data[0].priceDelivery,
      paymentType: props.data[0].paymentType,
      idStatus: props.data[0].idStatus,
      offert: props.data[0]?.offert,
      valueOffert: props.data[0]?.valueOffert,
    };
    dispatch(addProductToBag(announcement));
    history.push('/sacola');
  };
  const handleAddToCart = () => {
    const announcement = {
      idAnnouncement: props.data[0].idAnnouncement,
      title: props.data[0].title,
      color: props.data[0].color,
      size: props.data[0].size,
      state: props.data[0].state,
      description: props.data[0].description,
      tryOn: props.data[0].tryOn,
      initPrice: props.data[0].initPrice,
      idOwner: props.data[0].idOwner,
      nameOwner: props.data[0].nameOwner,
      telOwner: props.data[0].telOwner,
      idStyle: props.data[0].idStyle,
      idCategory: props.data[0].idCategory,
      deliveryType: props.data[0].deliveryType,
      priceDelivery: props.data[0].priceDelivery,
      paymentType: props.data[0].paymentType,
      idStatus: props.data[0].idStatus,
      offert: props.data[0]?.offert,
      valueOffert: props.data[0]?.valueOffert,
    };
    dispatch(addProductToBag(announcement));
  };

  return (
    <Container>
      <ContentTitle>
        <h1>{props.title}</h1>
        <img src={Heart} alt="" />
      </ContentTitle>
      <ContentDetails>
        <p>{props.style}</p>
        <p>{`Tamanho: ${props.size}`}</p>
        <p>{props.color}</p>
        <p>{props.state}</p>
      </ContentDetails>
      <ContentChoices>
        <p>
          <img src={Gift} alt="Peça para delivery" />
          {textDelivery}
        </p>
        <Frete>
          Frete(estimativa): <span>R$ {props.frete}</span>
        </Frete>
        {props.fitting ? (
          <>
            <p>
              <img src={CoatHanger} alt="Pode provar a peça" />
              Pode provar
            </p>
          </>
        ) : (
          false
        )}
      </ContentChoices>
      <ContentSale>
        <ContentPrice>
          {props.promo !== ' ' ? (
            <>
              <Promo> {`R$ ${props.price}`}</Promo>
              <Price> {`R$ ${props.promo}`}</Price>
            </>
          ) : (
            <Price>{`R$ ${props.price}`}</Price>
          )}
        </ContentPrice>
        <Method>{textMethod}</Method>
      </ContentSale>
      <Button btnBuy onClick={() => handleBag()}>Comprar</Button>
      {statusReceive ? (
        <Receive>
          não é possivel adicionar o produto na sacola, pois você pode apenas
          retirar o produto em mãos.
        </Receive>
      ) : (
        <Button onClick={() => handleAddToCart()}>Adicionar a sacola</Button>
      )}
    </Container>
  );
}
export default ProductInformation;
