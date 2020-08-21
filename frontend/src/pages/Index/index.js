import React from 'react';
import Header from '../../components/Header/Header';
import BannerSlide from '../../components/BannerSlide';
import ButtomCategory from '../../components/ButtomCategory/';
import ProductLarger from '../../components/ProductLarger/';
import ProductSmall from '../../components/ProductSmall/';
import BestSeller from '../../components/BestSeller/';
import BannerFashion from '../../components/BannerFashion/';
import Illustration from '../../components/Illustration/';
import Footer from '../../components/Footer/';

import Slide from '../../assets/photos/slide.png';
import PhotoProductLarger1 from '../../assets/photos/productlarger.png';
import PhotoProductLarger2 from '../../assets/photos/productlarger1.png';
import PhotoProductLarger3 from '../../assets/photos/productlarger2.png';
import PhotoUser from '../../assets/photos/bestSeller.png';
import PhotoUser2 from '../../assets/photos/bestSeller2.png';
import PhotoUser3 from '../../assets/photos/bestSeller3.png';
import PhotoUser4 from '../../assets/photos/bestSeller4.png';
import Delivery from '../../assets/illustrations/delivery.png';
import Sun from '../../assets/illustrations/sunsertao.png';

import './style.css';

function Index(props) {
  return (
    <>
      <Header></Header>
      <BannerSlide
        photo={Slide}
        alt="Menina comendo pipoca sentada no sofá"
        title="Para você bombar na quarentena"
      />
      <div className="buttonCategoryContent">
        <ButtomCategory icon="shirt" nameCategory="Camisas" />
        <ButtomCategory icon="bag" nameCategory="Acessórios" />
        <ButtomCategory icon="offer" nameCategory="Ofertas" />
        <ButtomCategory icon="fav" nameCategory="Apreciados" />
        <ButtomCategory icon="heart" nameCategory="Queridinhos" />
      </div>
      <section className="mainCategory">
        <h3>Punk</h3>
        <div className="productsLargeContent">
          <ProductLarger
            photoProductLarger={PhotoProductLarger1}
            title="jaquetinha stickers"
            price="45"
          />
          <ProductLarger
            photoProductLarger={PhotoProductLarger2}
            title="Blusinha soltinha"
            promo="5"
            price="15"
          />
          <ProductLarger
            photoProductLarger={PhotoProductLarger3}
            title="Jaqueta cropped com cintos"
            price="30"
          />
        </div>
      </section>
      <section className="subCategory">
        <section className="subCategoryContent">
          <h4>Geek</h4>
          <div className="itemsProductSmall">
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
          </div>
          <div className="itemsProductSmall">
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
              className="noMargin"
            />
          </div>
        </section>
        <section className="subCategoryContent">
          <h4>Praiero</h4>
          <div className="itemsProductSmall">
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
          </div>
          <div className="itemsProductSmall">
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
            <ProductSmall
              photoProductSmall={PhotoProductLarger1}
              title="jaquetinha"
              price="5"
            />
          </div>
        </section>
      </section>
      <section className="topSellers">
        <h3>Vendedores top</h3>
        <div className="topSellersContent">
          <BestSeller photoUser={PhotoUser} nameSeller="Fernanda" />
          <BestSeller photoUser={PhotoUser2} nameSeller="Michelle" />
          <BestSeller photoUser={PhotoUser3} nameSeller="Yan" />
          <BestSeller photoUser={PhotoUser4} nameSeller="Kainan" />
        </div>
      </section>
      <section className="bannerFashionContent">
        <BannerFashion />
      </section>
      <section className="illustrationsContent">
        <Illustration
          illustrate={Delivery}
          title="Entrega facilitada"
          content="Receba sua encomenda em mãos, com o vendedor."
        />
        <Illustration
          illustrate={Sun}
          title="Nós vendemos no Sertão Central! "
          content="O Pega! foi criado para vender no Sertão Central, aproximando vendedores e compradores da região."
        />
      </section>
      <Footer />
    </>
  );
}
export default Index;
