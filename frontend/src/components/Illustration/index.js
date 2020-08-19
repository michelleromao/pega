import React, { useState } from 'react';
import './style.css';

function Illustration(props) {
  return (
    <div className="drawComponent">
      <img src={props.illustrate} alt={props.alt} />
      <div className="textContent">
        <h2>{props.title}</h2>
        <p> {props.content}</p>
      </div>
    </div>
  );
}
export default Illustration;
