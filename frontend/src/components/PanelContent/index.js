import React from 'react' 
import { Content, Favoritos } from './style'
import Compras from '../ProductPanel'
import FilterPanel from '../../components/FilterPanel'
import AnuncioPanel from '../../components/AnuncioPanel'
import FavoritoItem from '../../components/FavoritoPanel'

export default function PanelContent () {
    return (
        <Content>
            
            <Favoritos>
                <FavoritoItem nome="Camiseta Baltimore" precoAntes="50" precoDepois="49"></FavoritoItem>
                <FavoritoItem nome="Camiseta Baltimore" precoAntes="50" precoDepois="49"></FavoritoItem>
                <FavoritoItem nome="Camiseta Baltimore" precoAntes="50" precoDepois="49"></FavoritoItem>
                <FavoritoItem nome="Camiseta Baltimore" precoAntes="50" precoDepois="49"></FavoritoItem>
                <FavoritoItem nome="Camiseta Baltimore" precoAntes="50" precoDepois="49"></FavoritoItem>
            </Favoritos>
            
        </Content>
    )
}

/* <FilterPanel></FilterPanel>
            <Compras nome="Jaquetinha Bio Parsa" notify="1 notificação" valor="50" vendedor="Michelle" data="08/02/1997"></Compras>
            <AnuncioPanel nomeProduto="Camisa Vasco 2020" preco="50"></AnuncioPanel> */