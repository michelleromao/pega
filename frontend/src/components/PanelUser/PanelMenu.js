import React from 'react'
import Foto from '../../assets/photos/userphoto.png'
import './PanelMenu.css'

export default function PanelMenu () {
    return (       
        <div className="sidebar">
            <p>Fernanda</p>
            <img src={Foto}></img>
            <ul>                
                <li>Informações pessoais<div className="hove"></div></li>
                <li>Minhas compras<div className="hove"></div></li>
                <li>Meus anúncios<div className="hove"></div></li>
                <li>Meus endereços<div className="hove"></div></li>
                <li>Meus favoritos<div className="hove"></div></li>
                <li>Pagamentos<div className="hove"></div></li>
            </ul>
        </div>
    )
}