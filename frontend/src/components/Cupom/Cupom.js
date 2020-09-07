import React from 'react';
import {CupomStyled} from './CupomStyled';
export default function Cupom(){
    return (
        <CupomStyled>
            <p>Tem um cupom?</p>
            <ul>
                <li>
                    <input placeholder="CUPOM"></input>
                </li>
                <li>
                    <button>Aplicar</button>
                </li>
            </ul>

        </CupomStyled>
    );
}
