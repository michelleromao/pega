import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form as Unform } from '@unform/web';
import Input from '../../components/Input';

import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import Arrow from '../../assets/icons/arrow.svg';
import GroupItem from '../../components/Sacola/GroupItem';

import { Container, Breadcrumb, Stage, Column,
  TitleModal,
  Bold,
  TextModal,
  Button,
  ButtonGroup,
  Paper,
  Modal,
} from './style';
import { userUpdate } from '../../store/modules/user/action';

import PaySafeWithPicPay from '../../components/PaySafeWithPicPay/PaySafeWithPicpay';
import TipsFrete from '../../components/TipsFrete/TipsFrete';
import Resume from '../../components/Sacola/Resume';

function Payment() {

  const dispatch = useDispatch();

  const idUser = useSelector((user) => user.user.idUser);
  const name = useSelector((user) => user.user.name);
  const username = useSelector((user) => user.user.username);
  const email = useSelector((user) => user.user.email);
  const senha = useSelector((user) => user.user.senha);
  const cpf = useSelector((user) => user.user.cpf);
  const telefone = useSelector((user) => user.user.telefone);
  const picpay = useSelector((user) => user.user.picpay);

  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);
  const history = useHistory();
  const [color, setColor] = useState('#000');
  const [color2, setColor2] = useState('#878787');

  const [stage, setStage] = useState(1);

  if (bagAnnouncements.length === 0) {
    history.push('/');
  }

  async function handlePicpay(data) {
    const request = await api.put(`/users/${idUser}`, {
      idUser,
      name,
      username,
      email,
      senha,
      cpf,
      telefone,
      picpay: data.picpay,
    });
    dispatch(userUpdate(request.data[0]));
  }

  const showModalPicpay = () => {
    return (
      <Modal>
        <Paper>
          <TitleModal>Opa! Falta pouco...</TitleModal>
          <TextModal>
            Para <Bold>anunciar</Bold> ou <Bold>comprar</Bold> você precisa
            informar seu Picpay
          </TextModal>
          <Unform
            onSubmit={handlePicpay}
            style={{
              width: '75%',
              display: 'column',
              justifyContent: 'center',
            }}
          >
            <Input
              fSize="14px"
              name="picpay"
              type="text"
              color="#569CCD"
              placeholder="@Seu_picpay"
              mask="@************************"
              maskPlaceholder={null}
              size="100%"
              required={true}
              input="input"
            />
            <ButtonGroup>
              <Link
                to={`/`}
                style={{
                  color: '#569CCD',
                  textDecoration: 'none',
                }}
              >
                Agora não
              </Link>

              <Button
                border="transparent"
                background="#569CCD"
                color="#fff"
                size="150px"
              >
                Confirmar
              </Button>
            </ButtonGroup>
          </Unform>
        </Paper>
      </Modal>
    );
  };

  return (
    <>
      {picpay === null || picpay === '' ? showModalPicpay() : <></>}

      <Breadcrumb>
        <Stage color={color2}>Sacola</Stage>
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
          <Resume stage={2} stageClick={2} />
        </Column>
      </Container>
    </>
  );
}

export default Payment;
