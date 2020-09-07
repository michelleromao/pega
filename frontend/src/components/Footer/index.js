import React from 'react';
import './style.css';
import { FiInstagram } from 'react-icons/fi';
function Footer(props) {
  return (
    <footer>
      <div className="footerRow">
        <div className="footerColumn">
          <h2>Sobre o Pega!</h2>
          <ul>
            <li>Quem somos</li>
            <li>Manifesto</li>
            <li>Slow Fashion</li>
            <li>Valores</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h2>Relacionamento</h2>
          <ul>
            <li>Contato</li>
            <li>Tira dúvidas</li>
            <li>Privacidade</li>
            <li>Segurança</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h2>Faq</h2>
          <ul>
            <li>Como vender?</li>
            <li>Como comprar?</li>
            <li>Posso experimentar?</li>
            <li>Posso devolver?</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h2>Dicas do Pega!</h2>
          <ul>
            <li>Foto ideal</li>
            <li>Tendências</li>
            <li>Conquistado o cliente</li>
          </ul>
        </div>
        <div className="footerColumn">
          <div className="columnContent">
            <h2>Formas de pagamento</h2>
            <ul>
              <li>Cartão de credito, boleto ou picpay</li>
            </ul>
            <h2>Siga-nos nas mídias!</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/pegaoficial/">
                  <FiInstagram className="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="credits">
        <p>Copyright © 2020 - Pega!</p>
        <p>Desenvolvido por Exclamados!</p>
      </div>
    </footer>
  );
}
export default Footer;
