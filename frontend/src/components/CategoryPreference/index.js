import React, { useState } from 'react';

import { Container, Text } from './style';
import Shirt from '../../assets/icons/Camisa';
import Add from '../../assets/icons/add.svg';
import { Link } from 'react-router-dom';

function CategoryPreference(props) {
  return (
    <Container border={props.border} background={props.background}>
      {props.name ? (
        <>
          <Link>
            <Shirt color="#fff" width="40" height="40" />{' '}
            <Text>{props.name}</Text>
          </Link>
        </>
      ) : (
        <img src={Add} alt="Adicionar nova categoria de interesse" />
      )}
    </Container>
  );
}
export default CategoryPreference;
