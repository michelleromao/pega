import React, { useState } from 'react';

import { PhotosProductContent } from './style';
function PhotosProduct(props) {
  const [active, setActive] = useState({ 0: true });

  const handleClick = (index) => {
    props.photos.map((p) => {
      return setActive({ [index]: true });
    });
  };

  return (
    <>
      <PhotosProductContent>
        {props.photos.map((p) => (
          <div
            key={p + Math.random()}
            className={active[props.photos.indexOf(p)] ? 'active' : 'inactive'}
            style={{
              backgroundImage: `url('http://localhost:3333/files/announcement/${p}')`,
              backgroundSize: 'cover',
              width: '500px',
              height: '100%',
            }}
            onClick={() => handleClick(props.photos.indexOf(p))}
          />
        ))}
      </PhotosProductContent>
    </>
  );
}
export default PhotosProduct;
