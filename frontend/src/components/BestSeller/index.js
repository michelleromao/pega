import React from 'react';
import './style.css';

function BestSeller(props) {
  return (
    <div className="bestSeller">
      <img src={props.photoUser} alt={`${props.nameSeller} é vendedor top!`} />
      <p className="bestSellerName">{props.nameSeller}</p>
    </div>
  );
}
export default BestSeller;
