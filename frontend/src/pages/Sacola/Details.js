import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage, Column } from './style';

import TipsFrete from '../../components/TipsFrete/TipsFrete';
import Resume from '../../components/Sacola/Resume';

function Details() {
  const history = useHistory();

  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);
  const idBag = useSelector((bag) => bag.bag);

  const [color, setColor] = useState('#000');
  const [color2, setColor2] = useState('#878787');

  const [announcementsData, setAnnouncementsData] = useState('#878787');

  useEffect(() => {
    async function loadTransaction() {
      const bag = api.get(`/bags/${idBag}`);
      const products = bag.data[0].announcements.map((item) => {
        return item;
      });
      setAnnouncementsData(products);
    }
    loadTransaction();
  }, []);
  return (
    <>
      <Breadcrumb>
        <Stage color={color2}>Sacola</Stage>
        <img src={Arrow} alt="" />
        <Stage color={color2}>Pagamento e Entrega</Stage>
        <img src={Arrow} alt="" />
        <Stage color={color}>Detalhes da compra</Stage>
      </Breadcrumb>

      <Container>
        <>
          <GroupItem
            stage={true}
            status={3}
            stageTitle={3}
            data={announcementsData}
          />
          <Column>
            <Resume stage={3} />
            <TipsFrete />
          </Column>
        </>
      </Container>
    </>
  );
}

export default Details;
