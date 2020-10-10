import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage, Column } from './style';

import TipsFrete from '../../components/TipsFrete/TipsFrete';
import Resume from '../../components/Sacola/Resume';

function Details() {
  const { pathId } = useParams();
  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);
  const [color, setColor] = useState('#000');
  const [color2, setColor2] = useState('#878787');

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
