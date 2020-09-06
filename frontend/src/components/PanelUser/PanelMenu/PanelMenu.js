import React from 'react'
import Foto from '../../../assets/photos/userphoto.png'
import './PanelMenu.css'
import { Sidebar, Hove } from './style'


export default function PanelMenu () {
    return (       
        <Sidebar>
            <p>Fernanda</p>
            <img src={Foto}></img>
            <ul>                
                <li>Informações pessoais<Hove></Hove></li>
                <li>Minhas compras<Hove></Hove></li>
                <li>Meus anúncios<Hove></Hove></li>
                <li>Meus endereços<Hove></Hove></li>
                <li>Meus favoritos<Hove></Hove></li>
                <li>Pagamentos<Hove></Hove></li>
            </ul>
        </Sidebar>
    )
}