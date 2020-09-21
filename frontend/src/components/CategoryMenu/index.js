import React from 'react'
import {Link} from 'react-router-dom'

import { Menu } from './style'

export default function CategoryMenu () {

    return (
        <>
        <Menu>
            <Link to="/">Todas as categorias</Link>
            <Link to="/">Calças</Link>
            <Link to="/">Moda íntima</Link>
            <Link to="/">Masculino</Link>
            <Link to="/">Feminino</Link>
            <Link to="/">Calçados</Link>
            <Link to="/">Shorts</Link>
            <Link to="/">Camisas</Link>
            <Link to="/">Infantil</Link>
            <Link to="/">Acessórios</Link>
        </Menu>
        </>
    ) 
}