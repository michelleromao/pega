import React from 'react'
import { Content, Favoritos } from './style'
import FormEndereco from '../../components/FormEnderecoPanel'
import ProductPanel from '../../components/ProductPanel'

export default function PanelContent () {
    return (
        <Content>
            <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
        </Content>
    )
}
