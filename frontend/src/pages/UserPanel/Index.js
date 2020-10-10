import React, { useState, useEffect } from 'react';
import PanelMenu from '../../components/PanelMenu'
import PanelContent from '../../components/PanelContent'
import {PanelUser, Title, Content, Sidebar, Hove} from './style'
import ProductPanel from '../../components/ProductPanel'
import Foto from '../../assets/photos/userphoto.png'
import { Link } from 'react-router-dom';

export default function Panel() {
    
    const [infos, setInfos] = useState(false);
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
                <button onClick={() => click(setPagamentos)}>Pagamentos<Hove></Hove></button>
            </ul>
        </Sidebar>
            <Content>
                {infos ? 
                    <ProductPanel nome="Camisa Vasco Kappa 2020" valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho="M" estado="Nova" cor="Preto" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
                        
                 : <div></div> 
                }

                {compras ? 
                    <h4>Compras</h4>
                        
                 : <div></div> 
                }

                {anuncios ? 
                    <h4>Anúncios</h4>
                        
                 : <div></div> 
                }

                {enderecos ? 
                    <h4>Endereços</h4>
                        
                 : <div></div> 
                }

                {favoritos ? 
                    <h4>Favoritos</h4>
                        
                 : <div></div> 
                }

                {pagamentos ? 
                    <h4>Pagamentos</h4>
                        
                 : <div></div> 
                }
            </Content>          
        </PanelUser>            
        </>
    )
}