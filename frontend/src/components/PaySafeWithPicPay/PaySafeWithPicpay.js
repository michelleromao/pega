import React from 'react';
import { PaySafeWithStyled } from './PaySafeWithStyled';
export default function Cupom() {
  return (
    <PaySafeWithStyled>
      <p>Pague com o Picpay</p>
      <div className="card">
        <div className="buySafe">
          <p>Compre com segurança</p>
        </div>
        <ul>
          <li>
            <div className="listStyle"></div>
            <div className="textList">
              O Pega! segura o valor pago e só libera quando a compra é
              finalizada com a entrega do seu pedido.
            </div>
          </li>
          <li>
            <div className="listStyle"></div>
            <div className="textList">
              Clique em Finalizar compra com Picpay para efetuar o pagamento.
            </div>
          </li>
        </ul>
      </div>
    </PaySafeWithStyled>
  );
}
