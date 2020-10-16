import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form as Unform } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';

import {Bold, Exclusao, Check, Title, CTAModal, Ends, Modal, Paper, CTA, InfoExclusao, FinalizarExclusao, Text, TextRed, User, UserInfos, CTAExclusao} from './style'
import Fernanda from '../../assets/photos/userphoto.png'
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import api from '../../services/api';
import { userLogout } from '../../store/modules/user/action';

export default function UserDelete (props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const idUser = useSelector((user) => user.user.idUser);
    const name = useSelector((user) => user.user.name);
    const username = useSelector((user) => user.user.username);

    const [photoUser, setPhotoUser] = useState();

    const [opinion, setOpinion] = useState(false)
    const [ends, setEnds] = useState(false)
    const [modal, setModal] = useState(false)
    const [data, setData] = useState();

    const checkboxOptions = [
      { id: 'otherAccount', value: 'Outra conta.', label: 'Já tenho outra conta' },
      { id: 'sellingWell', value: 'Não estou vendendo bem.', label: 'Não estou vendendo bem' },
      { id: 'other', value: 'Outro.', label: 'Outro' },

    ];

    if(!idUser){
      history.push("/");
    }

    useEffect(() => {
      async function loadPhoto() {
        const photo = await api.get(`/photosuser/${idUser}`);
        setPhotoUser(photo.data[0].filename);
      }
      loadPhoto();
    }, []);


    function formExclusao (data) {
      setModal(true)
      setData(data);
    }


    async function handleDelete(){
      if(idUser){
        if(data.option[0] === undefined){
          const request = await api.delete(`/users/${idUser}`, {reason: `Opção selecionada: Nenhuma. Motivo Escrito: ${data.reason}`});
          dispatch(userLogout());
          history.push('/contaremovida');
        }else{
          const request = await api.delete(`/users/${idUser}`, {reason: `Opção selecionada: ${data.option[0]} Motivo Escrito: ${data.reason}`});
          dispatch(userLogout());
          history.push('/contaremovida');
        }
      }
    }

    const showModalExclusao = () => {
        return (
          <Modal>
            <Paper>
            <h4>Você confirma que está excluindo a sua conta permanentemente?</h4>
                <CTAModal>
                    <Link onClick={() => setModal(false)}>Cancelar</Link>
                    <button onClick={() => handleDelete()}>Confirmar</button>
                </CTAModal>
            </Paper>
          </Modal>
        );
      };

    return (
        <>
        { modal ? showModalExclusao() : <></> }
        <>

            <Exclusao>
                <Title>
                    <h4>Excluir conta</h4>
                    <Link to="/painel">Nem, fui enganadx!</Link>
                </Title>
                {
                    opinion ?
                    <>
                    <h5>Será que você poderia ajudar a gente a entender o motivo da despedida?
                    É rapidinho!</h5>
                    <Unform
                      onSubmit={formExclusao}
                      style={{
                        width: '93%',
                        display: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Checkbox name="option"  options={checkboxOptions}
                      />

                    <Input
                      fSize="14px"
                      labelText=""
                      name="reason"
                      type="textarea"
                      color="#569CCD"
                      placeholder="Conte pra gente"
                      size="100%"
                      input="textarea"
                    />
                    <CTA>
                        <Link to="/">Cancelar</Link>
                        <button type="submit">Enviar</button>
                    </CTA>
                  </Unform>
                    </>
                    :
                    <>

                    <InfoExclusao>
                    <TextRed>Poxa, {name && name.split(" ")[0]}, achei que a gente tivesse uma conexão especial. Pegou,
curtiu e seguiu em frente. Depois aparece pedindo pra voltar.</TextRed>
                    <Text>Brincadeira! Aqui todo mundo é maduro. Mas a gente tem que te avisar que, se você excluir sua conta,
todos os seus dados na plataforma serão <Bold>deletados permanentemente.</Bold></Text>
                </InfoExclusao>

                <FinalizarExclusao>
                    <User>
                        <img src={`http://localhost:3333/files/user/${photoUser}`}></img>
                        <UserInfos>
                            <p>{name}</p>
                            <span>{username}</span>
                        </UserInfos>
                    </User>
                    <CTAExclusao>
                        <button onClick={() => setOpinion(!opinion)}>Excluir sua conta</button>
                        <p>Tudo acabado entre nós :'(</p>
                    </CTAExclusao>
                </FinalizarExclusao>
                    </>

                }

            </Exclusao>
        </>

        </>
    )
}
