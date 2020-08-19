import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import PhotoUser from '../../assets/photos/bestSeller.png';

function BestSeller(props) {
  return (
    <div className="bestSeller">
      <img src={PhotoUser} alt={`${props.nameSeller} é vendedor top!`} />
      <p className="bestSellerName">{props.nameSeller}</p>
    </div>
  );
}
export default BestSeller;
