import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import InterestCategories from '../InterestCategories';
import Input from '../Input';
import File from '../File';
import {
  Container,
  Title,
  FirstSection,
  PhotoContent,
  Action,
  Username,
  Label,
  User,
  Row,
  Column,
  Button,
  ContentButton,
  Delete,
} from './style';
import Default from '../../assets/photos/default.png';
import api from '../../services/api';
import { userUpdate } from '../../store/modules/user/action';

function Personal() {
  const dispatch = useDispatch();
  const idUser = useSelector((user) => user.user.idUser);
  const name = useSelector((user) => user.user.name);
  const username = useSelector((user) => user.user.username);
  const email = useSelector((user) => user.user.email);
  const senha = useSelector((user) => user.user.senha);
  const cpf = useSelector((user) => user.user.cpf);
  const telefone = useSelector((user) => user.user.telefone);
  const picpay = useSelector((user) => user.user.picpay);
  const interestCategories = useSelector((user) => user.user.interestCategories);
  const [data, setData] = useState(false);
  const [photo, setPhoto] = useState();

  const inputUsernameRef = useRef(username);
  const inputNameRef = useRef(name);
  const inputPicpayRef = useRef(picpay);
  const inputEmailRef = useRef(email);
  const inputCPFRef = useRef(cpf);
  const inputTelRef = useRef(telefone);
  const inputPwdRef = useRef(senha);
  const inputNewPwdRef = useRef();

  async function handleSubmit(data) {

    if((data.username
      || data.picpay
      || data.name
      || data.cpf
      || data.telefone
      || data.email
      || data.senha) === ''){
        alert(
          'Ops! Parece que há informações faltando, da mais uma olhadinha aí',
        );
      }else{
      const imagesUser = new FormData();
      if (data.avatar !== undefined) {
        imagesUser.append('avatar', data.avatar);
        await api.put(
          `/photosuser/${idUser}`,
          imagesUser,
        );
      }
      if(data.novaSenha !== ''){
        const user = await api.put(`/users/${idUser}`, {
          cpf: data.cpf,
          name: data.name,
          username: data.username,
          email: data.email,
          senha: data.senha,
          novaSenha: data.novaSenha,
          telefone: data.telefone,
          picpay: data.picpay,
        });
        dispatch(userUpdate(user.data[0]));
        alert('Muito bem! Tudo salvo, pode ir se divertir vendo produtos.');

      }
      else{
        const user = await api.put(`/users/${idUser}`, {
          cpf: data.cpf,
          name: data.name,
          username: data.username,
          email: data.email,
          senha: data.senha,
          telefone: data.telefone,
          picpay: data.picpay,
        });
        dispatch(userUpdate(user.data[0]));
        alert('Muito bem! Tudo salvo, pode ir se divertir vendo produtos.');
      }
      setData(false);
    }
  }

  useEffect(()=>{
    const loadPhoto = async () =>{
      if(idUser){
        const photoUser = await api.get(`/photosuser/${idUser}`);

        setPhoto(photoUser.data[0].filename);
      }
    }
    loadPhoto()
  },[]);

  return (
    <>


      <Container>
      <Unform
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column',
        }}
      >
        <FirstSection>
          <PhotoContent>
          {photo &&
               <File
                defaultImage={photo}
                select={"user"}
                border={true}
                name="avatar" width="89px" height="89px"
                onChange={(e) => setData(true)}

                />
                }
          </PhotoContent>
          <Username>
            <Label>Nome de usuário</Label>
            <User>{username}</User>
          </Username>
        </FirstSection>

        <Row>
          <Column>
            <Input
              labelText="Nome de usuário"
              fSize="14px"
              defaultValue={username}
              ref={inputUsernameRef}
              name="username"
              mask="*********************************"
              maskPlaceholder={null}
              type="text"
              color="#569CCD"
              placeholder="Seu nome de usuário"
              required={true}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
          <Column>
            <Input
              labelText="Picpay"
              fSize="14px"
              defaultValue={picpay}
              ref={inputPicpayRef}
              name="picpay"
              type="text"
              color="#569CCD"
              placeholder="Seu @Picpay"
              mask="@***********************"
              maskPlaceholder={null}
              required={true}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input
              labelText="Nome"
              fSize="14px"
              defaultValue={name}
              ref={inputNameRef}
              name="name"
              type="text"
              color="#569CCD"
              placeholder="Seu lindo nome"
              required={true}
              size={21}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
          <Column>
            <Input
              labelText="CPF"
              fSize="14px"
              defaultValue={cpf}
              ref={inputCPFRef}
              name="cpf"
              type="text"
              color="#569CCD"
              placeholder="Seu CPF"
              required={true}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input
              labelText="E-mail"
              fSize="14px"
              defaultValue={email}
              ref={inputEmailRef}
              name="email"
              type="text"
              color="#569CCD"
              placeholder="Seu melhor e-mail"
              required={true}
              size={30}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
          <Column>
            <Input
              labelText="Telefone"
              fSize="14px"
              defaultValue={telefone}
              ref={inputTelRef}
              name="telefone"
              type="text"
              color="#569CCD"
              placeholder="(88) 9 9999 9999"
              mask="(99)\ 9 9999 9999"
              maskPlaceholder={null}
              required={true}
              onChange={(e) => setData(true)}
              input="input"
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input
              labelText="Senha atual"
              fSize="14px"
              defaultValue={senha}
              ref={inputPwdRef}
              name="senha"
              type="password"
              color="#569CCD"
              placeholder="*****************"
              required={true}
              onChange={(e) => setData(true)}
              marginBottom="5%"
              input="input"
            />
          </Column>
          <Column>
            <Input
              labelText="Nova senha"
              fSize="14px"
              ref={inputNewPwdRef}
              name="novaSenha"
              type="password"
              color="#569CCD"
              placeholder="**** nova senha se quiser"
              onChange={(e) => setData(true)}
              marginBottom="5%"
              input="input"
            />
          </Column>
        </Row>

        {data ? (
          <ContentButton>
            <div></div>
            <div>
              <Button  onClick={() => setData(false)}>Cancelar</Button>
              <Button type="submit">Salvar alterações</Button>
            </div>

          </ContentButton>
        ) : (
          <></>
        )}
      </Unform>
      <InterestCategories categories={interestCategories ? interestCategories : []}></InterestCategories>
      <Delete>
        <div></div>
        <Link to="/excluir-conta/">Excluir conta</Link>
      </Delete>
    </Container>

      </>
  );
}
export default Personal;
