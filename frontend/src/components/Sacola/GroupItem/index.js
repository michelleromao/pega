import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, Title, Content, Seller, Contact } from './style';
import Item from '../Item';

function GroupItem(props) {
  const [stageTitle, setStageTitle] = useState(props.stageTitle);
  const [delivery, setDelivery] = useState(props.delivery);

  return (
    <>
      <Container>
        <Title>
          {stageTitle === 1 ? (
            <>
              <Seller>
                Vendido por <Link>Michelle</Link>
              </Seller>
            </>
          ) : (
            <></>
          )}
          {stageTitle === 2 ? (
            <>
              <Seller>
                Combine com <Link>Michelle</Link> o tipo de entrega ao efetuar a
                compra.
              </Seller>
            </>
          ) : (
            <></>
          )}
          {stageTitle === 3 ? (
            <>
              <Seller>
                Vendido por <Link>Michelle</Link>
              </Seller>
              <Contact>(85) 9 9705 5583</Contact>
            </>
          ) : (
            <></>
          )}
        </Title>
        <Content>
          <Item stage={props.stage} status={props.status} />
          <Item stage={props.stage} status={props.status} />
        </Content>
      </Container>
    </>
  );
}
export default GroupItem;
