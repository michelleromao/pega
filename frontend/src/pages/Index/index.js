import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const [confortavel, setConfortavel] = useState();
  const [confortavel2, setConfortavel2] = useState();

  const [floral, setFloral] = useState();
  const [floral2, setFloral2] = useState();

  const [users, setUsers] = useState();

  const idUser = useSelector((user) => user.user.idUser);

  useEffect(() => {
    async function loadAnnouncementsOne() {
      const casualAnnouncements = await api.get(
        '/announcements/?idStyle=9867aef7-6913-4ae6-9ac1-c9e4102a9301&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&limit=3',
      );
      const confortavelAnnouncements = await api.get(
        '/announcements/?idStyle=961f0303-71ac-4362-825b-5d29864aa89d&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&limit=2',
      );

      const confortavelAnnouncements2 = await api.get(
        '/announcements/?idStyle=961f0303-71ac-4362-825b-5d29864aa89d&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&skip=2&limit=2',
      );
      const floralAnnouncements = await api.get(
        '/announcements/?idStyle=6d8ff57f-cbc4-43c2-8d7f-f72966de2c9e&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&limit=2',
      );
      const floralAnnouncements2 = await api.get(
        '/announcements/?idStyle=6d8ff57f-cbc4-43c2-8d7f-f72966de2c9e&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&skip=2&limit=2',
      );
      const sellers = await api.get('/users/?limit=4');
      setCasual(casualAnnouncements.data.promiseFilter);
      setConfortavel(confortavelAnnouncements.data.promiseFilter);
      setConfortavel2(confortavelAnnouncements2.data.promiseFilterSkip);

      setFloral(floralAnnouncements.data.promiseFilter);
      setFloral2(floralAnnouncements2.data.promiseFilterSkip);

      setUsers(sellers.data.promise);
    }
    loadAnnouncementsOne();
  }, []);
  return (
    <>
      <BannerSlide
        photo={Slide}
        alt="Menina comendo pipoca sentada no sofá"
        title="Para você bombar na quarentena"
      />
      <ButtomContent>

      <Link to="/search"><ButtomCategory icon="shirt" nameCategory="Camisas" /></Link>
        <Link to="/search"><ButtomCategory icon="bag" nameCategory="Acessórios" /></Link>
        <Link to="/search"> <ButtomCategory icon="offer" nameCategory="Ofertas" /></Link>
        <Link to="/search"> <ButtomCategory icon="fav" nameCategory="Apreciados" /></Link>
        <Link to="/search"><ButtomCategory icon="heart" nameCategory="Queridinhos" /></Link>
      </ButtomContent>
      {casual ? (
        <ContentMain>
          <h3>Casual</h3>
          <ContentProductLarger>
            {casual &&
              casual.map((announcement) => {
                if (announcement.idOwner !== idUser) {
                  return (
                    <ProductLarger
                      key={announcement.idAnnouncement}
                      id={announcement.idAnnouncement}
                      photoProductLarger={PhotoProductLarger1}
                      title={announcement.title}
                      price={announcement.initPrice}
                      promo={
                        announcement.offert ? announcement.valueOffert : ' '
                      }
                    />
                  );
                }
              })}
          </ContentProductLarger>
        </ContentMain>
      ) : (
        <></>
      )}

      <ContentSub>
        {confortavel ? (
          <ContentSubCategory>
            <h4>Confortável</h4>
            <Items>
              {confortavel &&

              confortavel.map((announcement) => {
                  if (announcement.idOwner !== idUser) {
                    return (
                      <ProductSmall
                        key={announcement.idAnnouncement}
                        id={announcement.idAnnouncement}
                        title={announcement.title}
                        price={announcement.initPrice}
                        promo={
                          announcement.offert ? announcement.valueOffert : ''
                        }
                      />
                    );
                  }
                })}
            </Items>
            <Items>
              {confortavel2 &&
                confortavel2.map((announcement) => {
                  if (announcement.idOwner !== idUser) {
                    return (
                      <ProductSmall
                        key={announcement.idAnnouncement}
                        id={announcement.idAnnouncement}
                        photoProductSmall={PhotoProductLarger1}
                        title={announcement.title}
                        price={announcement.initPrice}
                        promo={
                          announcement.offert ? announcement.valueOffert : ''
                        }
                      />
                    );
                  }
                })}
            </Items>
          </ContentSubCategory>
        ) : (
          <></>
        )}
        {floral ? (
          <ContentSubCategory>
            <h4>Floral</h4>
            <Items>
              {floral &&
                floral.map((announcement) => {
                  if (announcement.idOwner!== idUser) {
                    return (
                      <ProductSmall
                        key={announcement.idAnnouncement}
                        id={announcement.idAnnouncement}
                        photoProductSmall={PhotoProductLarger1}
                        title={announcement.title}
                        price={announcement.initPrice}
                        promo={
                          announcement.offert ? announcement.valueOffert : ''
                        }
                      />
                    );
                  }
                })}
            </Items>
            <Items>
              {floral2 &&
                floral2.map((announcement) => {
                  if (announcement.idOwner !== idUser) {
                    return (
                      <ProductSmall
                        key={announcement.idAnnouncement}
                        id={announcement.idAnnouncement}
                        photoProductSmall={PhotoProductLarger1}
                        title={announcement.title}
                        price={announcement.initPrice}
                        promo={
                          announcement.offert ? announcement.valueOffert : ''
                        }
                      />
                    );
                  }
                })}
            </Items>
          </ContentSubCategory>
        ) : (
          <></>
        )}
      </ContentSub>
      <ContentTopSellers>
        <h3>Vendedores top</h3>
        <TopSellers>
          {users &&
            users.map((user) => {
              return (
                <BestSeller
                  photoUser={PhotoUser}
                  id={user.idUser}
                  nameSeller={user.name}
                />
              );
            })}
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
