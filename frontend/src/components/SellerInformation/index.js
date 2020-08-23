import React, { useState } from 'react';
import './style.css';
import StarComponent from './StarComponent';
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
  //(i=0; i<=5; i<=contFav)
  //loop 0 a 5, props.contFav,
  //ate o valor que recebeu,
  //entrela azul, se nao, estrela cinza
  //renderiza 5, recebe a quantidade de fav,
  return (
    <>
      <div className="sellerInformationContainer">
        <h3>Sobre o vendedor</h3>
        <div className="sellerInformationContent">
          <img src={props.photo} alt={props.nameSeller} />
          <div className="columnSeller">
            <div className="rowSeller">
              <h5>{props.name}</h5>
              <p>{props.location}</p>
            </div>
            <div className="rowSeller">
              <StarComponent>
                <Star color="#949494" />
                <Star color="#949494" />
                <Star color="#949494" />
                <Star color="#949494" />
                <Star color="#949494" />
              </StarComponent>
              <span>({props.contComents})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerInformation;
