import React from 'react'
import {Link} from 'react-router-dom'
import {Categorias} from './style'

export default function Menu () {

    return (
        <>
        <Categorias>
            <Link to="/search">Todas as categorias</Link>
            <Link to="/search">Calças</Link>
            <Link to="/search">Moda íntima</Link>
            <Link to="/search">Masculino</Link>
            <Link to="/search">Feminino</Link>
            <Link to="/search">Calçados</Link>
            <Link to="/search">Shorts</Link>
            <Link to="/search">Camisas</Link>
            <Link to="/search">Infantil</Link>
            <Link to="/search">Acessórios</Link>
        </Categorias>
        </>
    ) 
}