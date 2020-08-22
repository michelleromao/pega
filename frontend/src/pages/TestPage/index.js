import React from 'react';
import SellerInformation from '../../components/SellerInformation';
import Seller from '../../assets/photos/bestSeller.png';

function TestPage() {
  return (
    <>
      <SellerInformation
        photo={Seller}
        name="Fernanda"
        location="Quixadá - CE"
        contFav="3"
        contComents="32"
      />
    </>
  );
}
export default TestPage;
