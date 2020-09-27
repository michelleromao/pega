import React from 'react'
import {Link} from 'react-router-dom';
import {MenuStyled} from './menuStyled.js';
export default function Menu({tela}){
    return (
        <MenuStyled mostrar={tela}>
            <ul>
                <li><Link to="/painel">Meu Painel</Link></li>
                <li><Link>Meus Favoritos</Link></li>
                <li><Link>Minhas Vendas</Link></li>
                <li><Link>Minhas Compras</Link></li>
                <li><Link>Meu Perfil</Link></li>
                <li><Link>Sair</Link></li>
            </ul>

        </MenuStyled>

    )
}