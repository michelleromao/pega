import React from 'react';

import BannerSlide from '../../components/BannerSlide';
import ButtomCategory from '../../components/ButtomCategory/';
import ProductLarger from '../../components/ProductLarger/';
import ProductSmall from '../../components/ProductSmall/';
import BestSeller from '../../components/BestSeller/';
import BannerFashion from '../../components/BannerFashion/';
import Illustration from '../../components/Illustration/';

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

import {
  ButtomContent,
  ContentMain,
  ContentProductLarger,
  ContentSub,
  ContentSubCategory,
  Items,
  ContentTopSellers,
  TopSellers,
  ContentBannerFashion,
  ContentIllustration,
} from './style';
import api from '../../services/api';

function Index() {
  return (
    <>
      <BannerSlide
        photo={Slide}
        alt="Menina comendo pipoca sentada no sofá"
        title="Para você bombar na quarentena"
      />
      <ButtomContent>
        <ButtomCategory icon="shirt" nameCategory="Camisas" />
        <ButtomCategory icon="bag" nameCategory="Acessórios" />
        <ButtomCategory icon="offer" nameCategory="Ofertas" />
        <ButtomCategory icon="fav" nameCategory="Apreciados" />
        <ButtomCategory icon="heart" nameCategory="Queridinhos" />
      </ButtomContent>
      <ContentMain>
        <h3>Punk</h3>
        <ContentProductLarger>
          <ProductLarger
            id="000"
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
        </ContentProductLarger>
      </ContentMain>
      <ContentSub>
        <ContentSubCategory>
          <h4>Geek</h4>
          <Items>
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
          </Items>
          <Items>
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
          </Items>
        </ContentSubCategory>
        <ContentSubCategory>
          <h4>Praiero</h4>
          <Items>
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
          </Items>
          <Items>
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
          </Items>
        </ContentSubCategory>
      </ContentSub>
      <ContentTopSellers>
        <h3>Vendedores top</h3>
        <TopSellers>
          <BestSeller photoUser={PhotoUser} nameSeller="Fernanda" />
          <BestSeller photoUser={PhotoUser2} nameSeller="Michelle" />
          <BestSeller photoUser={PhotoUser3} nameSeller="Yan" />
          <BestSeller photoUser={PhotoUser4} nameSeller="Kainan" />
        </TopSellers>
      </ContentTopSellers>
      <ContentBannerFashion>
        <BannerFashion />
      </ContentBannerFashion>
      <ContentIllustration>
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
      </ContentIllustration>
    </>
  );
}
export default Index;
