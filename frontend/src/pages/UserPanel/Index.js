import React, { useState, useEffect } from 'react';
import PanelMenu from '../../components/PanelMenu'
import PanelContent from '../../components/PanelContent'
import {PanelUser, Title, Content, Sidebar, Hove, Favs} from './style'
import ProductPanel from '../../components/ProductPanel'
import Foto from '../../assets/photos/userphoto.png'
import { Link } from 'react-router-dom';
import PersonalInformation from '../../components/Personal'
import AnuncioPanel from '../../components/AnuncioPanel'
import Filter from '../../components/FilterPanel'
import Endereco from '../../components/EnderecoPanel'
import Favorito from '../../components/FavoritoPanel'

export default function Panel() {
    
    const [infos, setInfos] = useState(true);
    const [compras, setCompras] = useState(false);
    const [anuncios, setAnuncios] = useState(false);
    const [enderecos, setEnderecos] = useState(false);
    const [favoritos, setFavoritos] = useState(false);
    const [pagamentos, setPagamentos] = useState(false);

    function resetState() {
        setInfos(false)
        setCompras(false)
        setAnuncios(false)
        setEnderecos(false)
        setFavoritos(false)
        setPagamentos(false)
    }
    
    function click (hook) {
        resetState()
        hook(!false)
    }

    return (
        <>        
        <PanelUser>
        <Sidebar>
            <p>Fernanda</p>
            <img src={Foto}></img>
            <ul>                
                <button onClick={() => click(setInfos)}>Informações pessoais<Hove></Hove></button>
                <button onClick={() => click(setCompras)}>Minhas compras<Hove></Hove></button>
                <button onClick={() => click(setAnuncios)}>Meus anúncios<Hove></Hove></button>
                <button onClick={() => click(setEnderecos)}>Meus endereços<Hove></Hove></button>
                <button onClick={() => click(setFavoritos)}>Meus favoritos<Hove></Hove></button>
            </ul>
        </Sidebar>
            <Content>
                {infos ? 
                    <>
                    <Title>Informações pessoais</Title>
                    <PersonalInformation></PersonalInformation>
                    </>
                        
                 : <div></div> 
                }

                {compras ? 
                    <>
                    <Title>Minhas compras</Title>
                    <Filter></Filter>
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>

                    </>
                 : <div></div> 
                }

                {anuncios ? 
                    <>
                    <Title>Meus anúncios</Title>
                    <Filter></Filter>
                    <AnuncioPanel></AnuncioPanel>
                    <AnuncioPanel></AnuncioPanel>
                    <AnuncioPanel></AnuncioPanel>
                    </>
                    
                        
                 : <div></div> 
                }

                {enderecos ? 
                    <>
                    <Title>Meus endereços</Title>
                    <Endereco></Endereco> 
                    <Endereco></Endereco> 
                    <Endereco></Endereco>                    
                    </>
                        
                 : <div></div> 
                }

                {favoritos ? 
                    <>
                    <Title>Meus favoritos</Title>
                    <Filter></Filter>
                    <Favs>
                        <Favorito></Favorito>
                        <Favorito></Favorito>
                        <Favorito></Favorito>
                    </Favs>
                    
                    </>
                        
                 : <div></div> 
                }

            </Content>          
        </PanelUser>            
        </>
    )
}