import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import {Content, ProductDetail, NamePrice, Name, Price, Actions, Editar, Modal,
 Paper, CTAModal, Excluir, Pausar} from './style'
import api from '../../services/api';

export default function AnuncioPainelv (props) {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const [photoProduct, setPhotoProduct] = useState();
  useEffect(() => {
    async function loadPhoto() {
      const photo = await api.get(`/photosannouncement/${props.id}`);
      setPhotoProduct(photo.data[0].originalname[0]);
    }
    loadPhoto();
  }, []);


  const handleDeleteAnnouncement = async () => {
    const request = await api.delete(`/announcements/${props.id}`);
    history.push("/");
  }

const showModalExclusao = () => {
  return (
    <Modal>
      <Paper>
      <h4>Você confirma que quer excluir seu anúncio?</h4>
          <CTAModal>
              <Link onClick={() => setModal(false)}>Cancelar</Link>
              <button onClick={() => handleDeleteAnnouncement()}>Confirmar</button>
          </CTAModal>
      </Paper>
    </Modal>
  );
};

    return (
        <>
        { modal ? showModalExclusao() : <></> }

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
                   <Excluir onClick={() => setModal(true)}>Excluir</Excluir>
                   <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </> :
                  <>
                   <Pausar>Pausar</Pausar>
                   <Excluir onClick={() => setModal(true)}>Excluir</Excluir>

                    <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </>}
                </Actions>
            </Content>  :
            <>
             <Content>
            <Link to={`anuncio/${props.id}`}>

                <ProductDetail>
                    <img src={`http://localhost:3333/files/announcement/${photoProduct}`}></img>
                    <NamePrice>
                    <Name>{props.nomeProduto}</Name>
                    <Price>R$ {props.preco}</Price>
                    </NamePrice>
                </ProductDetail>
            </Link>

                <Actions>
                {(props.vendido || props.reservado) ? <></> :
                  props.rascunho ?
                  <>
                   <Excluir onClick={() => setModal(true)}>Excluir</Excluir>
                   <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </> :
                  <>
                   <Pausar>Pausar</Pausar>
                   <Excluir onClick={() => setModal(true)}>Excluir</Excluir>


                    <Editar>
                        <Link to={`editar/anuncio/${props.id}`}>Editar</Link>
                    </Editar>
                  </>}
                </Actions>
            </Content>
            </>
          }
        </>
    )
}
