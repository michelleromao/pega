import React, { useState } from 'react';
import { Container, Content, Column, Row } from './style';
import Star from '../../assets/icons/Estrela';

function SellerInformation(props) {
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
          <img src={props.photo} alt={props.nameSeller} />
          <Column>
            <Row>
              <h5>{props.nameSeller}</h5>
              <p>{props.location}</p>
            </Row>
            <Row>
              {colorStar(props.contFav)}
              <span>({props.contComents})</span>
            </Row>
          </Column>
        </Content>
      </Container>
    </>
  );
}
export default SellerInformation;
