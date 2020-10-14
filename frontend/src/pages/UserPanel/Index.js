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
import api from '../../services/api';

export default function Panel() {
    
    const [infos, setInfos] = useState(true);
    const [compras, setCompras] = useState(false);
    const [anuncios, setAnuncios] = useState(false);
    const [vendas, setVendas] = useState(false);
    const [enderecos, setEnderecos] = useState(false);
    const [favoritos, setFavoritos] = useState(false);
    
    function resetState() {
        setInfos(false)
        setCompras(false)
        setVendas(false)
        setAnuncios(false)
        setEnderecos(false)
        setFavoritos(false)
    }
    
    function click (hook) {
        resetState()
        hook(!false)
    }

    useEffect(() => {
        async function loadAnnouncementsOne() {
          const casualAnnouncements = await api.get(
            '/announcements/?idStyle=9867aef7-6913-4ae6-9ac1-c9e4102a9301&idStatus=a7249f2f-da3c-4312-8269-4d20aa326dcc&limit=3',
          );
        }
        loadAnnouncementsOne();
      }, []);

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
                <button onClick={() => click(setVendas)}>Minhas vendas<Hove></Hove></button>
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
                    <ProductPanel comprador="Yan" nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>

                    </>
                 : <div></div> 
                }

                {anuncios ? 
                    <>
                    <Title>Meus anúncios</Title>
                    <Filter></Filter>
                    <AnuncioPanel nomeProduto="Camisa Ceará 2018 Topper" preco="32"></AnuncioPanel>
                    <AnuncioPanel nomeProduto="Camisa Ceará 2018 Topper" preco="32"></AnuncioPanel>
                    <AnuncioPanel nomeProduto="Camisa Ceará 2018 Topper" preco="32"></AnuncioPanel>

                    </>
                    
                        
                 : <div></div> 
                }

                {vendas ? 
                    <>
                    <Title>Meus anúncios</Title>
                    <Filter></Filter>
                    <ProductPanel tipo="venda" comprador="Yan" nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>

                    </>
                    
                        
                 : <div></div> 
                }

                {enderecos ? 
                    <>
                    <Title>Meus endereços</Title>
                    <Endereco username="Yan Vancelis" principal="Principal" rua="Rua José de Queiroz Pessoa, 1648" cidade="Quixadá" cep="63900-000"></Endereco> 
                    <Endereco username="Micael Lima" principal="" rua="Rua Valdivino Santiago, 221" cidade="Russas" cep="62900-000"></Endereco> 
                    </>
                        
                 : <div></div> 
                }

                {favoritos ? 
                    <>
                    <Title>Meus favoritos</Title>
                    <Filter></Filter>
                    <Favs>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                        <Favorito nome="Camisa Time Old" prcoAntes="40" precoDepois="32"></Favorito>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                    </Favs>
                    
                    </>
                        
                 : <div></div> 
                }

            </Content>          
        </PanelUser>            
        </>
    )
}