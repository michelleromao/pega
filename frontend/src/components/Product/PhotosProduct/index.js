import React, { useState } from 'react';
import './style.css';

function PhotosProduct(props) {
  const [photo1, photo2, photo3] = props.photos;
  const [active, setActive] = useState({
    photo1: true,
    photo2: false,
    photo3: false,
  });

  const handleClick = (index) => {
    console.log(index);
    if (index === 1) {
      setActive({
        photo1: true,
        photo2: false,
        photo3: false,
      });
    } else if (index === 2) {
      setActive({
        photo1: false,
        photo2: true,
        photo3: false,
      });
    } else if (index === 3) {
      setActive({
        photo1: false,
        photo2: false,
        photo3: true,
      });
    }
  };

  let status1 = active.photo1 ? 'active' : 'inactive';
  let status2 = active.photo2 ? 'active' : 'inactive';
  let status3 = active.photo3 ? 'active' : 'inactive';

  return (
    <>
      <div className="photosProductContent">
        <div
          className={status1}
          style={{
            backgroundImage: `url(${photo1})`,
          }}
          onClick={() => handleClick(1)}
        />
        <div
          className={status2}
          style={{ backgroundImage: `url(${photo2})` }}
          onClick={() => handleClick(2)}
        />
        <div
          className={status3}
          style={{
            backgroundImage: `url(${photo3})`,
          }}
          onClick={() => handleClick(3)}
        />
      </div>
    </>
  );
}
export default PhotosProduct;
