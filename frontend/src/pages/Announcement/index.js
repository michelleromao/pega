import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Breadcrumbs from '../../components/Breadcrumbs';
import PhotosProduct from '../../components/Product/PhotosProduct';
import ProductInformation from '../../components/Product/ProductInformation';
import DescriptionProduct from '../../components/Product/DescriptionProduct';
import Comment from '../../components/Product/CommentsArea/Comments/Comments';

import SellerInformation from '../../components/SellerInformation';
import ProductSmall from '../../components/ProductSmall';

import Photoproduct from '../../assets/photos/photoproduct.png';
import Photoproduct2 from '../../assets/photos/photoproduct2.png';
import Photoproduct3 from '../../assets/photos/photoproduct3.png';
import PhotoUser from '../../assets/photos/bestSeller3.png';
import PhotoProductSmall1 from '../../assets/photos/productsmall1.png';
import PhotoProductSmall2 from '../../assets/photos/productsmall2.png';
import PhotoProductSmall3 from '../../assets/photos/productsmall3.png';

import {
  ContentBreadcrumbs,
  ContentFirst,
  ContentSecond,
  ContentThird,
  ContentMore,
  Items,
} from './style';
import { useEffect } from 'react';

function Announcement() {
  const [announcement, setAnnouncement] = useState();
  const [photos, setPhotos] = useState([]);
  const [style, setStyle] = useState('');
  const [category, setCategory] = useState('');
  const [ownerData, setOwnerData] = useState();
  const [productsOwner, setProductsOwner] = useState();
  const { pathId } = useParams();
  localStorage.removeItem('id');

  useEffect(() => {
    async function getData(id) {
      const { data } = await api.get(`/announcements/${id}?limit=1`);
      const dataImg = await api.get(`/photosannouncement/${id}`);
      const nameStyle = await api.get(`/styles/${data[0].idStyle}`);
      const nameCategory = await api.get(`/categories/${data[0].idCategory}`);
      const owner = await api.get(`/users/${data[0].idOwner}`);
      const photoOwner = await api.get(`/photosuser/${owner.data[0].idUser}`);
      const products = await api.get(
        `/announcements/?idOwner=${owner.data[0].idUser}&limit=4`,
      );
      setProductsOwner(products.data.promiseUser);
      setOwnerData({
        name: owner.data[0].name,
        rate: owner.data[0].rating,
        fileUser: `http://localhost:3333/files/user/${photoOwner.data[0].filename}`,
      });
      setStyle(nameStyle.data[0].name);
      setCategory(nameCategory.data[0].name);
      setPhotos(dataImg.data[0].originalname);
      setAnnouncement(data);
    }
    getData(pathId);
  }, []);

  return (
    <>
      <ContentBreadcrumbs>
        <Breadcrumbs category={category} />
      </ContentBreadcrumbs>
      <ContentFirst>
        <PhotosProduct photos={photos} />
        <ProductInformation
          data={announcement}
          title={announcement?.[0].title}
          state={announcement?.[0].state}
          size={announcement?.[0].size}
          color={announcement?.[0].color}
          style={style}
          delivery={['Frete']}
          frete={announcement?.[0].priceDelivery}
          method={['Picpay']}
          fitting={announcement?.[0].tryOn}
          promo={announcement?.[0].offert ? announcement?.[0].valueOffert : ' '}
          price={
            announcement?.[0].offert
              ? announcement?.[0].initPrice
              : announcement?.[0].initPrice
          }
        />
      </ContentFirst>
      <ContentSecond>
        <DescriptionProduct description={announcement?.[0].description} />
        <SellerInformation
          photo={ownerData && ownerData.fileUser}
          nameSeller={ownerData && ownerData.name}
          contFav={ownerData && `${ownerData.rate}`}
          contComents="0"
        />
      </ContentSecond>
      <ContentThird>
        <Comment />
      </ContentThird>
      {productsOwner ? (
        <ContentMore>
          <h4>Mais desse vendedor</h4>
          <Items>
            {productsOwner.map((product) => {
              if (product.idAnnouncement === pathId) {
                return;
              } else {
                return (
                  <ProductSmall
                    key={product.idAnnouncement}
                    id={product.idAnnouncement}
                    photoProductSmall={PhotoProductSmall1}
                    title={product.title}
                    price={product.initPrice}
                    promo={product.offert ? product.valueOffert : ''}
                  />
                );
              }
            })}
          </Items>
        </ContentMore>
      ) : (
        <></>
      )}
    </>
  );
}
export default Announcement;
