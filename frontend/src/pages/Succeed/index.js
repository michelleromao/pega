import React from 'react';
import { Link } from 'react-router-dom';

import { LogoContent, H3, Text, Span } from './style';
import Logo from '../../assets/Logo';
import Success from '../../assets/icons/success.svg';

function Succeed() {
  return (
    <>
      <LogoContent>
        <Link to="/">
          <Logo color="#569CCD" />
        </Link>
      </LogoContent>
      <H3>A conta foi criada!</H3>
      <img src={Success} alt="Sucesso! Conta criada." />
      <Text>
        Lembre-se de completar as <Link>informações</Link> pessoas para começar
        a comprar e anunciar.
      </Text>
      <Span>(Se eu fosse tu, eu completava logo, eu...)</Span>
      <Text>Ou</Text>
      <Text>
        <Link to="/">Comece a explorar</Link> uma variedade de estilos agora
        mesmo e inclua suas informações antes de comprar ou anunciar.
      </Text>
    </>
  );
}
export default Succeed;
