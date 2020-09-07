import React from 'react';
import {TipsFreteStyled} from './TipsFreteStyled';
export default function TipsFrete(){
    return(
        <TipsFreteStyled>
            <div className="titulo">
                <div> 
                    <p>Entenda como funciona a<strong> entrega</strong> <br/>
                <strong>com frete</strong> nesse passo-a-passo:
                    </p>
                </div>
            </div>
            <div className="bordaLista"></div>
            <div className="lista">
                <ul>
                    <li>
                        <div className="orderList">1</div> <div className="listText">Finalize a compra</div>
                    </li>
                    <li>
                        <div className="orderList">2</div> <div className="listText">Entre em contato com o(a) vendedor(a) para saber o valor do frete até a sua casa</div>
                    </li>
                    <li>
                        <div className="orderList">3</div> <div className="listText">Acesse Minhas Compras, no Meu Painel</div>
                    </li>
                    <li>
                        <div className="orderList">4</div> <div className="listText">Clique em Detalhes da compra</div>
                    </li>
                    <li>
                        <div className="orderList">5</div> <div className="listText">Clique em Adicionar dinheiro para adicionar o valor do frete</div>
                    </li>
                    <li>
                        <div className="orderList">6</div> <div className="listText">Pronto!</div>
                    </li>
                    
                </ul>
            </div>

        </TipsFreteStyled>
    );
}