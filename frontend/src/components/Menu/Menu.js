import React from 'react'
 import {MenuStyled} from './menuStyled.js';
export default function Menu(){
    return (
        <MenuStyled>
            <ul>
                <li>Meu Painel</li>
                <li>Meus Favoritos</li>
                <li>Minhas Vendas</li>
                <li>Minhas Compras</li>
                <li>Meu Perfil</li>
                <li>Sair</li>
            </ul>

        </MenuStyled>

    )
}