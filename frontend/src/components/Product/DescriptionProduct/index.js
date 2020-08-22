import React from 'react';
import './style.css';

function DescriptionProduct(props) {
  return (
    <>
      <div className="descriptionProductContainer">
        <h3>Descrição</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default DescriptionProduct;
