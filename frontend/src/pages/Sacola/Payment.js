import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage, Column } from './style';

import PaySafeWithPicPay from '../../components/PaySafeWithPicPay/PaySafeWithPicpay';
import TipsFrete from '../../components/TipsFrete/TipsFrete';
import Resume from '../../components/Sacola/Resume';
import { Link } from 'react-router-dom';

function Payment() {
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
        <Link to="/sacola">
          <Stage color={color2}>Sacola</Stage>
        </Link>
        <img src={Arrow} alt="" />
        <Stage color={color}>Pagamento e Entrega</Stage>
        <img src={Arrow} alt="" />
        <Stage color={color2}>Detalhes da compra</Stage>
      </Breadcrumb>

      <Container>
        <GroupItem stage={true} status={2} stageTitle={2} />
        <Column>
          <TipsFrete />
          <PaySafeWithPicPay />
          <Resume stage={1} stageClick={2} />
        </Column>
      </Container>
    </>
  );
}

export default Payment;
