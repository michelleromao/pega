import React from 'react'
import { Link } from 'react-router-dom';

import {Content, ProductDetail, NamePrice, Name, Price, Actions, Editar} from './style'
import FotoProduto from '../../assets/photos/photoproduct.png'

export default function AnuncioPainelv (props) {
    return (
        <>
        {props.vendido || props.reservado ?
         <Content>
                <ProductDetail>
                    <img src={FotoProduto}></img>
                    <NamePrice>
                    <Name>{props.nomeProduto}</Name>
                    <Price>R$ {props.preco}</Price>
                    </NamePrice>
                </ProductDetail>
                <Actions>
                {(props.vendido || props.reservado) ? <></> :
                  props.rascunho ?
                  <>
                   <Link >Excluir</Link>
                   <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </> :
                  <>
                   <Link >Excluir</Link>
                    <button>Pausar</button>
                    <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </>}
                </Actions>
            </Content>  :
            <Link to={`anuncio/${props.id}`}>            <Content>
                <ProductDetail>
                    <img src={FotoProduto}></img>
                    <NamePrice>
                    <Name>{props.nomeProduto}</Name>
                    <Price>R$ {props.preco}</Price>
                    </NamePrice>
                </ProductDetail>
                <Actions>
                {(props.vendido || props.reservado) ? <></> :
                  props.rascunho ?
                  <>
                   <Link >Excluir</Link>
                   <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </> :
                  <>
                   <Link >Excluir</Link>
                    <button>Pausar</button>
                    <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </>}
                </Actions>
            </Content>
            </Link>
          }
        </>
    )
}
