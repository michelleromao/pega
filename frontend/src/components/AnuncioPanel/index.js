import React from 'react'
import {Content, ProductDetail, NamePrice, Name, Price, Actions, Editar} from './style'
import FotoProduto from '../../assets/photos/photoproduct.png'
import { Link } from 'react-router-dom';

export default function AnuncioPainelv (props) {
    return (
        <>
            <Content>
                <ProductDetail>                    
                    <img src={FotoProduto}></img>                                  
                    <NamePrice>
                    <Name>{props.nomeProduto}</Name>
                    <Price>R$ {props.preco}</Price>
                    </NamePrice>                        
                </ProductDetail>
                <Actions>
                    <button>Pausar</button>
                    <Link>Excluir</Link>
                    <Editar>
                        <Link>Editar</Link>
                    </Editar>
                    
                </Actions>
            </Content>
        </>
    )
}