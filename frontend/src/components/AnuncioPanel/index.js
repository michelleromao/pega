import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {Content, ProductDetail, NamePrice, Name, Price, Actions, Editar} from './style'
import api from '../../services/api';

export default function AnuncioPainelv (props) {

  const [photoProduct, setPhotoProduct] = useState();
  useEffect(() => {
    async function loadPhoto() {
      const photo = await api.get(`/photosannouncement/${props.id}`);
      setPhotoProduct(photo.data[0].originalname[0]);
    }
    loadPhoto();
  }, []);
    return (
        <>
        {props.vendido || props.reservado ?
         <Content>
                <ProductDetail>
                    <img src={`http://localhost:3333/files/announcement/${photoProduct}`}></img>
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
                    <img src={`http://localhost:3333/files/announcement/${photoProduct}`}></img>
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
