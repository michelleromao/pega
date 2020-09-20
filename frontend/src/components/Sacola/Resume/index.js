import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

function Resume(props) {
  const [stage, setStage] = useState(props.stage);
  const [stageClick, setStageClick] = useState(props.stageClick);

  return (
    <>
      <Container>
        {stage === 1 ? (
          <>
            {' '}
            <Content>
              <Detail>
                <p>produtos</p>
                <Price>R$ {props.totalValue}</Price>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>R$ {props.totalValue}</Price>
              </Detail>
              <Line />
              {stageClick === 1 ? (
                <Link to="/payment">
                  <Button>Continuar</Button>
                </Link>
              ) : (
                <></>
              )}

              {stageClick === 2 ? (
                <Link to="/details">
                  <Button>Continuar</Button>
                </Link>
              ) : (
                <></>
              )}
              {stageClick === 3 ? <></> : <></>}
            </Content>
            <Wait>Pera, quero pegar mais coisas</Wait>
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
                <Price>R$ {props.totalValue}</Price>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>R$ {props.totalValue}</Price>
              </Detail>
              <Line />
              <Button>Continuar</Button>
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
                <Price>R$ {props.totalValue}</Price>
              </Detail>
              <Detail>
                <p>cupom</p>
                <p>- R$ 0</p>
              </Detail>
              <Detail>
                <Total>Total a pagar</Total>
                <Price>R$ {props.totalValue}</Price>
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
const mapStateToProps = (state, props) =>{
  return {"totalValue": state.bag.totalValue};    
}
  
export default connect(mapStateToProps)(Resume)
