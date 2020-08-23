import React from 'react';
import PhotosProduct from '../../components/Product/PhotosProduct';
import Photoproduct from '../../assets/photos/photoproduct.png';
import Photoproduct2 from '../../assets/photos/photoproduct2.png';
import Photoproduct3 from '../../assets/photos/photoproduct3.png';

function TestPage() {
  return (
    <>
      <PhotosProduct photos={[Photoproduct, Photoproduct2, Photoproduct3]} />
    </>
  );
}
export default TestPage;
