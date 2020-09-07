import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { addProductToCartRequest } from '../../store/modules/sacola/actions';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage } from './style';
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
  /*
  useEffect(() => {
    api.get(`user/dd2`).then((response) => {
      const userSacola = response.data.sacola;
      userSacola.map((product) => {
        api.get(`products/${product.product}`).then((response) => {
          const products = response.data;
          setSacola([...sacola, products]);
        });
      });
    });
  }, []);*/

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
        <Resume stage={1} stageClick={2} />
      </Container>
    </>
  );
}

export default Payment;
