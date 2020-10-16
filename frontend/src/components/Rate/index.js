import React, { useEffect, useState } from 'react';

import {
  Name,
  User,
  Product,
  FirstContent,
  Message,
  Rate,
  Container
} from './style';
import Star from '../../assets/icons/Estrela';

function Rated() {

  const colorStar = (contFav) => {
    if (contFav === '0') {
      return (
        <>
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '1') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '2') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '3') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '4') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '5') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
        </>
      );
    }
  };

  return (
    <>
      <Container>
        <FirstContent>
          <User>
            <img src="http://localhost:3333/files/user/default.png" alt="Foto do usuário" width={50}/>
          <Name>Geraldim</Name>
          </User>
          <Product>Avaliou Camisa Star Wars Darth Vader</Product>
        </FirstContent>
        <Message>
        Qualidade incrível, amei super. E chegou antes do prazo. Tudo pra mim
        </Message>
        <Rate>
        {colorStar("4")}

        </Rate>
      </Container>
    </>);
}
export default Rated;
