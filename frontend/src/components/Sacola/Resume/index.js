import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Content,
  Detail,
  Total,
  Price,
  Line,
  Button,
  Wait,
  Success,
  Text,
} from './style';
import Suscess from '../../../assets/icons/success.svg';
import { buyProductsInBag } from '../../../store/modules/bag/action';

function Resume(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [stage, setStage] = useState(props.stage);
  const [stageClick, setStageClick] = useState(props.stageClick);
  const bagResume = useSelector((bag) => bag.bag);

  console.log(bagResume);
  const idUser = useSelector((user) => user.user.idUser);

  const handleContinue = () => {
    if (bagResume.announcements.length === 0) {
      alert('Comece selecionando produtos para comprar');
      history.push('/');
    } else {
      history.push('/payment');
    }
  };

  const handlePayment = () => {
    if (!idUser) {
      alert(
        'Peraí um momento! Para comprar você precisa se logar, vou te redirecionar rapidim',
      );
      history.push('/login');
    } else {
      dispatch(buyProductsInBag(idUser));
    }
  };

  return (
    <>
      <Container>
        {stage === 1 ? (
          <>
            {' '}
            <Content>
              <Detail>
                <p>produtos</p>
                <p>{bagResume.value}</p>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>{bagResume.value}</Price>
              </Detail>
              <Line />
              {stageClick === 1 ? (
                <Button onClick={() => handleContinue()}>Continuar</Button>
              ) : (
                <></>
              )}
            </Content>
            <Link to="/">
              <Wait>Pera, quero pegar mais coisas</Wait>
            </Link>
          </>
        ) : (
          <></>
        )}
        {stage === 2 ? (
          <>
            {' '}
            <Content>
              <Detail>
                <p>produtos</p>
                <p>{bagResume.value}</p>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>{bagResume.value}</Price>
              </Detail>
              <Line />
              <Button onClick={() => handlePayment()}>Continuar</Button>
            </Content>
          </>
        ) : (
          <></>
        )}
        {stage === 3 ? (
          <>
            {' '}
            <Content>
              <Detail>
                <p>produtos</p>
                <p>{bagResume.value}</p>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>{bagResume.value}</Price>
              </Detail>
              <Line />
              <Success>
                <Text>Pagamento efetuado</Text>
                <img src={Suscess} alt="" />
              </Success>
            </Content>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
export default Resume;
