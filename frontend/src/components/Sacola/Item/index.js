import React, { useState, useCallback } from 'react';

import {
  Container,
  ContentPhoto,
  Button,
  Content,
  ContentTitle,
  Title,
  AddMore,
  ButtonAction,
  Quantity,
  ContentDetails,
  Detail,
  DetailUnique,
  ContentPrice,
  Promo,
  Price,
} from './style';
import Image from '../../../assets/photos/productsmall3.png';

function Item(props) {
  const [color, setColor] = useState('#878787');
  const [background, setBackground] = useState('#fff');
  const [border, setBorder] = useState('1px solid #878787');
  const [provar, setProvar] = useState();
  const [stage, setStage] = useState(props.stage);

  function handleReserve() {
    setColor('#fff');
    setBackground('#569CCD');
    setBorder('none');
    setProvar(true);

    if (color === '#fff') {
      setColor('#878787');
      setBackground('#fff');
      setBorder('1px solid #878787');
      setProvar(false);
    }
  }

  return (
    <>
      <Container>
        <ContentPhoto>
          <img src={Image} alt="" />
          {stage ? (
            <></>
          ) : (
            <Button
              color={color}
              border={border}
              background={background}
              onClick={handleReserve}
            >
              {provar ? <>reservando</> : <>quero provar</>}
            </Button>
          )}
          {stage ? <></> : <></>}
          {stage ? <></> : <></>}
        </ContentPhoto>
        <Content>
          <ContentTitle>
            <Title>Camiseta Tom Astronauta {props.title}</Title>
          </ContentTitle>
          <ContentDetails>
            <Detail>Usado {props.state}</Detail>
            <Detail>Tamanho M {props.size}</Detail>
            <Detail>Tamanho {props.color}</Detail>
            <DetailUnique>Peça única</DetailUnique>
          </ContentDetails>
          <ContentPrice>
            <Promo>R$ 45.00{props.promo}</Promo>
            <Price>R$ 35.00{props.price}</Price>
          </ContentPrice>
        </Content>
      </Container>
    </>
  );
}
export default Item;
