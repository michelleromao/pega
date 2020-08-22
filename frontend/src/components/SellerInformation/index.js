import React, { useState } from 'react';
import './style.css';
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
              {colorStar(props.contFav)}
              <span>({props.contComents})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerInformation;
