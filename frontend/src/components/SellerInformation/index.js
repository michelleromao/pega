import React, { useState } from 'react';
import { Container, Content, Column, Row } from './style';
import Star from '../../assets/icons/Estrela';

function SellerInformation({
  photo,
  contFav,
  nameSeller,
  location,
  contComents,
}) {
  const [star, setStar] = useState(0);

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
        <h3>Sobre o vendedor</h3>
        <Content>
          <img src={photo} alt={nameSeller} />
          <Column>
            <Row>
              <h5>{nameSeller}</h5>
              <p>{location}</p>
            </Row>
            <Row>
              {colorStar(contFav)}
              <span>({contComents})</span>
            </Row>
          </Column>
        </Content>
      </Container>
    </>
  );
}
export default SellerInformation;
