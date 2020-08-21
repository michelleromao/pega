import React from 'react';
import './style.css';

function BannerSlide(props) {
  return (
    <div className="contentBannerSlide">
      <figure className="containerPhoto">
        <img src={props.photo} alt={props.alt} />
        <figcaption>
          <h1>{props.title}</h1>
          <button>Ver anuncios</button>
        </figcaption>
      </figure>
    </div>
  );
}
export default BannerSlide;
