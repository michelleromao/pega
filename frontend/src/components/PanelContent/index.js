import React from 'react' 
import { Content, Favoritos } from './style'
import FormEndereco from '../../components/FormEnderecoPanel'

export default function PanelContent () {
    return (
        <Content>                       
            <FormEndereco></FormEndereco>    
        </Content>
    )
}

/* <FilterPanel></FilterPanel>
            <Compras nome="Jaquetinha Bio Parsa" notify="1 notificação" valor="50" vendedor="Michelle" data="08/02/1997"></Compras>
            <AnuncioPanel nomeProduto="Camisa Vasco 2020" preco="50"></AnuncioPanel> */