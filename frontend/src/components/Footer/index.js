import React from 'react';
import './style.css';
import { FiInstagram } from 'react-icons/fi';
import {
  Container,
  FooterRow,
  FooterColumn,
  ColumnContent,
  Line,
  Credits

} from './style';

function Footer() {
  return (
    <Container>
      <FooterRow >
        <FooterColumn >
          <h2>Sobre o Pega!</h2>
          <ul>
            <li>Quem somos</li>
            <li>Manifesto</li>
            <li>Slow Fashion</li>
            <li>Valores</li>
          </ul>
        </FooterColumn>
        <FooterColumn >
          <h2>Relacionamento</h2>
          <ul>
            <li>Contato</li>
            <li>Tira dúvidas</li>
            <li>Privacidade</li>
            <li>Segurança</li>
          </ul>
        </FooterColumn>
        <FooterColumn >
          <h2>Faq</h2>
          <ul>
            <li>Como vender?</li>
            <li>Como comprar?</li>
            <li>Posso experimentar?</li>
            <li>Posso devolver?</li>
          </ul>
        </FooterColumn>

        <FooterColumn >
          <h2>Dicas do Pega!</h2>
          <ul>
            <li>Foto ideal</li>
            <li>Tendências</li>
            <li>Conquistado o cliente</li>
          </ul>
        </FooterColumn>
        <FooterColumn >
          <ColumnContent>
            <h2>Formas de pagamento</h2>
            <ul>
              <li>Cartão de credito, boleto ou picpay</li>
            </ul>
            <h2>Siga-nos nas mídias!</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/pegaoficial/">
                  <FiInstagram style={{
                      color: '#83bde6',
                      width: '25px',
                      height: '25px',
                  }} />
                </a>
              </li>
            </ul>
          </ColumnContent>
        </FooterColumn>
      </FooterRow>
      <Line/>
      <Credits>
        <p>Copyright © 2020 - Pega!</p>
        <p>Desenvolvido por Exclamados!</p>
      </Credits>
    </Container>
  );
}
export default Footer;
