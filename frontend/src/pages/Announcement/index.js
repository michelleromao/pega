import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Breadcrumbs from '../../components/Breadcrumbs';
import PhotosProduct from '../../components/Product/PhotosProduct';
import ProductIformation from '../../components/Product/ProductIformation';
import DescriptionProduct from '../../components/Product/DescriptionProduct';
import Comment from '../../components/Product/CommentsArea/Comments/Comments';

import SellerInformation from '../../components/SellerInformation';
import ProductSmall from '../../components/ProductSmall';
import './style.css';
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

  const { pathId } = useParams();
  useEffect(() => {
    async function getData(id) {
      const { data } = await api.get(`/announcements/${id}`);
      const dataImg = await api.get(`/photosannouncement/${id}`);
      const nameStyle = await api.get(`/styles/${data[0].idStyle}`);
      const nameCategory = await api.get(`/categories/${data[0].idCategory}`);

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
        <ProductIformation
          title={announcement?.[0].title}
          state={announcement?.[0].state}
          size={announcement?.[0].size}
          color={announcement?.[0].color}
          style={style}
          delivery={['Frete']}
          method={['Picpay']}
          fitting={announcement?.[0].tryOn}
          promo={announcement?.[0].offert ? announcement?.[0].offertValue : ' '}
          price={announcement?.[0].initPrice}
        />
      </ContentFirst>
      <ContentSecond>
        <DescriptionProduct description={announcement?.[0].description} />
        <SellerInformation
          photo={PhotoUser}
          nameSeller="Kainan"
          contFav="4"
          contComents="32"
        />
      </ContentSecond>
      <ContentThird>
        <Comment />
      </ContentThird>
      <ContentMore>
        <h4>Mais desse vendedor</h4>
        <Items>
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
        </Items>
      </ContentMore>
    </>
  );
}
export default Announcement;
