import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { addProductToCartRequest } from '../../store/modules/sacola/actions';
import Item from '../../components/Sacola/Item';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage } from './style';
import Resume from '../../components/Sacola/Resume';

function Sacola() {
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
        <Stage color={color}>Sacola</Stage>
        <img src={Arrow} alt="" />
        <Stage color={color2}>Pagamento e Entrega</Stage>
        <img src={Arrow} alt="" />
        <Stage color={color2}>Detalhes da compra</Stage>
      </Breadcrumb>

      <Container>
        <GroupItem status={1} stageTitle={1} />
        <Resume stage={1} stageClick={1} />
      </Container>
    </>
  );
}

export default Sacola;
