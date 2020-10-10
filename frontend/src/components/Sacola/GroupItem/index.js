import React, { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, Content, Seller, Contact, textTitle } from './style';
import Item from '../Item';
import api from '../../../services/api';

function GroupItem(props) {
  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);
  const [owner, setOwner] = useState();
  const [ownerProduct, setOwnerProduct] = useState([]);
  const [idOwnerProduct, setIdOwnerProduct] = useState([]);
  const [announcementsData, setAnnouncementsData] = useState(props.data);

  const { pathId } = useParams();
useEffect(()=>{
  const loadOwnerAnnouncement = async() =>{
    if(bagAnnouncements){
      const result = bagAnnouncements.map(async (item) =>{
        const res = await api.get(`/users/${item.idOwner}`);
        return res.data[0];
      });
      Promise.all(result).then((complete) =>{
       const products = complete.map(owners => {
        return owners.name;
       });
       const ids = complete.map(owners => {
         return owners.idUser;
       });
       setIdOwnerProduct(ids);
       setOwnerProduct(products);
      }
      );
    }
  }
  loadOwnerAnnouncement();
},[]);

  useEffect(() => {
   const loadAnnouncementsDetaisl = async () =>{
    const bag = await api.get(`/bags/${pathId}`);

    const results = bag.data[0].announcements.map(async (item) => {
      const product = await api.get(`/announcements/${item}/`);
      return product.data[0];
    });
    Promise.all(results).then((completed) => {
      const res = completed.map(async (item) => {
        const user = await api.get(`/users/${item.idOwner}`);
        return user.data[0];
      });
    Promise.all(res).then((complete) =>{
      setOwner([{...owner},{
        name: complete[0].name.split(" ")[0],
        tel: complete[0].telefone,
      }])}
    );
    setAnnouncementsData(completed)});
   }
   if(pathId)
   {
    loadAnnouncementsDetaisl();

   }
  }, []);



  const [stageTitle, setStageTitle] = useState(props.stageTitle);
  const [delivery, setDelivery] = useState(props.delivery);

  return (
    <>
      <Container>
        { stageTitle === 3 &&
        bagAnnouncements.length === 0 && announcementsData ? (
           announcementsData.map((announcement) => {
            return(
              <>
              <Title>
                <Seller>Vendido por {announcement.nameOwner}</Seller>
                <textTitle>Entre em contato com {announcement.nameOwner}</textTitle>
                <Contact>{announcement.telOwner}</Contact>
              </Title>
              <Content>
                <Item
                key={announcement.idAnnouncement}
                  id={announcement.idAnnouncement}
                  stage={props.stage}
                  status={props.status}
                  title={announcement.title}
                  state={announcement.state}
                  size={announcement.size}
                  color={announcement.color}
                  promo={announcement.offert ? announcement.valueOffert : ' '}
                  price={
                    announcement.offert
                      ? announcement.initPrice
                      : announcement.initPrice
                  }
                />
              </Content>
              </>);
       })) : <></> }

         {bagAnnouncements.map(announcements => {

           return(
             <>
              <Title>
                {stageTitle === 1 ? (
                  <Seller>
                    Vendido por <Link>{announcements.nameOwner}</Link>
                  </Seller>
                ) : (
                  <></>
                )}
                {stageTitle === 2 ? (
                  <Seller>
                    {announcements.nameOwner} oferece envio de pedidos por frete. Vocês podem
                    combinar esta modalidade adicionando dinheiro após a compra.
                  </Seller>
                ) : (
                  <></>
                )}
              </Title>
              <Content>
                  <Item
                    key={announcements.idOwner}
                    id={announcements.idAnnouncement}
                    stage={props.stage}
                    status={props.status}
                    title={announcements.title}
                    state={announcements.state}
                    size={announcements.size}
                    color={announcements.color}
                    promo={announcements.offert ? announcements.valueOffert : ' '}
                    price={
                      announcements.offert
                        ? announcements.initPrice
                        : announcements.initPrice
                    }
                  />
                </Content>
              </>
              );
            })
          }




      </Container>
    </>
  );
}
export default GroupItem;
