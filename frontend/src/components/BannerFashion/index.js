import React from 'react';
import './style.css';

function BannerFashion(props) {
  return (
    <div className="contentBannerFashion">
      <div className="barVertical pink">
        <p>Roupinhas da moda</p>
      </div>
      <div className="barVertical yellow">
        <p>Roupinhas da moda</p>
      </div>
      <div className="contentBannerFashionColumn">
        <div className="barHorizontal blue">
          <p>Roupinhas da moda</p>
        </div>
        <div className="barHorizontal red">
          <p>Roupinhas da moda</p>
        </div>
      </div>
    </div>
  );
}
export default BannerFashion;
