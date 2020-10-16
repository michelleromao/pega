import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, LogoContent, Text, Button } from './style';
import Logo from '../../assets/Logo';
import Error404 from '../../assets/illustrations/404.png';

function Details() {
  return (
    <>
      <Container>
        <img src={Error404} alt="" />
        <Text>
          Parece que o sol torrou essa página! Foi mal aí, a página que tentou
          acessar não foi encontrada.
        </Text>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </Container>
    </>
  );
}

export default Details;
