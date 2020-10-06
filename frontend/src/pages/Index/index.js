import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
  const [casual, setCasual] = useState();
  const idUser = useSelector((user) => user.user.idUser);

  useEffect(() => {
    async function loadAnnouncementsOne() {
      const casualAnnouncements = await api.get(
        '/announcements/?idStyle=9867aef7-6913-4ae6-9ac1-c9e4102a9301&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&limit=3',
      );
      setCasual(casualAnnouncements.data.promise);
    }
    loadAnnouncementsOne();
  }, []);
  console.log(casual);
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
        <h3>Casual</h3>
        <ContentProductLarger>
          {casual &&
            casual.map((announcement) => {
              if (announcement.idUser !== idUser) {
                return (
                  <ProductLarger
                    key={announcement.idAnnouncement}
                    id={announcement.idAnnouncement}
                    photoProductLarger={PhotoProductLarger1}
                    title={announcement.title}
                    price={announcement.initPrice}
                    promo={announcement.offert ? announcement.valueOffert : ' '}
                  />
                );
              }
            })}
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
