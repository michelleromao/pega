import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, Content, Seller, Contact } from './style';
import Item from '../Item';
import api from '../../../services/api';

function GroupItem(props) {
  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);

  const [owner, setOwner] = useState(' ');
  const [ownerProduct, setOwnerProduct] = useState(' ');

  useEffect(() => {
    async function getOwnerName(id) {
      console.log(id);
      if (id !== ' ') {
        const { data } = await api.get(`/users/${id}`);
        setOwner({
          name: data[0].name.split(' ')[0],
          telefone: data[0].telefone,
        });
      } else {
        setOwner(' ');
        setOwnerProduct(' ');
      }
    }
    getOwnerName(bagAnnouncements.idOwner);
  }, []);

  const [stageTitle, setStageTitle] = useState(props.stageTitle);
  const [delivery, setDelivery] = useState(props.delivery);
  return (
    <>
      <Container>
        {owner !== ' ' ? (
          <Title>
            {stageTitle === 1 ? (
              <Seller>
                Vendido por <Link>{owner.name}</Link>
              </Seller>
            ) : (
              <></>
            )}
            {stageTitle === 2 ? (
              <Seller>
                {owner.name} oferece envio de pedidos por frete. Vocês podem
                combinar esta modalidade adicionando dinheiro após a compra.
              </Seller>
            ) : (
              <></>
            )}

            {stageTitle === 3 ? (
              <>
                <Seller>Vendido por {owner.name}</Seller>
                <Contact>{owner.telefone}</Contact>
              </>
            ) : (
              <></>
            )}
          </Title>
        ) : (
          <></>
        )}
        <Content>
          {bagAnnouncements.map((announcement) => {
            return (
              <>
                {props.data ? (
                  props.data.map((item) => {
                    return (
                      <Item
                        id={item.idAnnouncement}
                        stage={props.stage}
                        status={props.status}
                        title={item.title}
                        state={item.state}
                        size={item.size}
                        color={item.color}
                        promo={item.offert ? item.valueOffert : ' '}
                        price={item.offert ? item.initPrice : item.initPrice}
                      />
                    );
                  })
                ) : (
                  <Item
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
                )}
              </>
            );
          })}
        </Content>
      </Container>
    </>
  );
}
export default GroupItem;
