import React from 'react'
import { FiMenu, FiChevronDown } from 'react-icons/fi'
import Sacola from '../../assets/icons/sacola.svg'
import Fernanda from './nanda.png'
import './Header.css'
import Bolsa from '../../assets/icons/Bolsa'
import Logo from '../../assets/Logo'
import Pesquisa from '../../assets/icons/Lupa'

export default function Header() {
    return (
        <div className="Header">
            <div className="Logo">
                <Logo />
            </div>            
            <div className="Categorias">
                <FiMenu /> <p>Categorias</p>
            </div>
                <div className="Pesquisa">
                <input type="search" placeholder="Encontre seu produto aqui! =D"></input>
                <Pesquisa />
            </div>            
            <button id="cta-vender">Vender</button>
            <div className="Usuario">
                <p>Olá, Fernanda</p>
                <img src={Fernanda}></img>
                <FiChevronDown />          
            </div>
            <div className="Sacola">
                <span>3</span><Bolsa />
            </div>
            
        </div>
    )
}
