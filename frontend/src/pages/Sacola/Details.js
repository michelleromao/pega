import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage, Column } from './style';
import Resume from '../../components/Sacola/Resume';

function Details() {
  const [color, setColor] = useState('#000');
  const [color2, setColor2] = useState('#878787');

  const [stage, setStage] = useState(1);
  const [sacola, setSacola] = useState([
    {
      id: '',
      owner: '',
      title: '',
      state: '',
      size: '',
      color: '',
      price: '',
      promo: '',
      reserve: '',
    },
  ]);

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
          <GroupItem stage={true} status={3} stageTitle={3} />
          <Column>
            <Resume stage={3} />
          </Column>
        </>
      </Container>
    </>
  );
}

export default Details;
