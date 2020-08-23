import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import PhotosProduct from '../../components/Product/PhotosProduct';
import ProductIformation from '../../components/Product/ProductIformation';
import DescriptionProduct from '../../components/Product/DescriptionProduct';
import SellerInformation from '../../components/SellerInformation';
import ProductSmall from '../../components/ProductSmall';
import './style.css';
import Photoproduct from '../../assets/photos/photoproduct.png';
import Photoproduct2 from '../../assets/photos/photoproduct2.png';
import Photoproduct3 from '../../assets/photos/photoproduct3.png';
import PhotoUser from '../../assets/photos/bestSeller.png';
import PhotoProductSmall1 from '../../assets/photos/productsmall1.png';
import PhotoProductSmall2 from '../../assets/photos/productsmall2.png';
import PhotoProductSmall3 from '../../assets/photos/productsmall3.png';

import './style.css';

function Announcement() {
  return (
    <>
      <Breadcrumbs category="indie" />
      <div className="firstContentProduct">
        <PhotosProduct photos={[Photoproduct, Photoproduct2, Photoproduct3]} />
        <ProductIformation
          title="Jaquetinha stickers"
          state="Novo"
          size="M"
          color="Rosa"
          delivery={['Entrega em mãos', 'delivery']}
          method={['cartão de crédito', 'boleto', 'picpay']}
          fitting={true}
          promo="25"
          price="50"
        />
      </div>
      <div className="secondContentProduct">
        <DescriptionProduct description="Jaqueta rosa jeans, que vem com stickers para colocar no tecido. Rosinha claro, está um pouco desbotada em alguns cantos, na manga, mas nada demais. Possui alguns rasgos laterais, mas é do modelo. Apenas 2 meses de uso. Motivo da venda: não cabe mais em mim, nos braços ficam apertados. Veste P facilmente." />
        <SellerInformation
          photo={PhotoUser}
          nameSeller="Fernanda"
          location="Quixadá - CE"
          contFav="4"
          contComents="32"
        />
      </div>
      <div className="thirdContentProduct">
        {/*aqui vai o component de comentário*/}
      </div>
      <div className="moreProductSeller">
        <h4>Mais desse vendedor</h4>
        <div className="itemsProductSeller">
          <ProductSmall
            photoProductSmall={PhotoProductSmall1}
            title="Tom&Jerry space"
            price="25"
          />
          <ProductSmall
            photoProductSmall={PhotoProductSmall2}
            title="Blusa Stranger Things"
            promo="10"
            price="25"
          />
          <ProductSmall
            photoProductSmall={PhotoProductSmall3}
            title="Imma ET-Girl"
            price="10"
          />
        </div>
      </div>
    </>
  );
}
export default Announcement;
