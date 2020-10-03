import React, { useState } from 'react';
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
import Nanda from '../../assets/photos/bestSeller.png';
import { useEffect } from 'react';
import { useRef } from 'react';

function Personal() {
  const [photo, setPhoto] = useState({ photo: Default, name: `${Default}` });

  const [user, setUser] = useState({
    username: 'michelleromao123',
    name: 'Michelle Romao',
    picpay: '',
    email: 'michelle.nunes10@gmail.com',
    CPF: '07286246305',
    tel: '85997055583',
    pwd: '123',
    newPwd: '',
    categories: ['Geek', 'Rippie', 'Conforto'],
  });

  const [data, setData] = useState(false);

  const inputUsernameRef = useRef(user.username);
  const inputNameRef = useRef(user.name);
  const inputPicpayRef = useRef(user.picpay);
  const inputEmailRef = useRef(user.email);
  const inputCPFRef = useRef(user.CPF);
  const inputTelRef = useRef(user.tel);
  const inputPwdRef = useRef(user.pwd);
  const inputNewPwdRef = useRef(user.newPwd);

  function handleSubmit(data) {
    console.log(data);
    console.log(user);
    alert('Muito bem! Tudo salvo, pode ir se divertir vendo produtos.');
    setData(false);
  }

  useEffect(() => {
    setUser({
      username: inputUsernameRef.current,
      name: inputNameRef.current,
      picpay: inputPicpayRef.current,
      email: inputEmailRef.current,
      CPF: inputCPFRef.current,
      tel: inputTelRef.current,
      pwd: inputPwdRef.current,
      newPwd: inputNewPwdRef.current,
      categories: ['Geek', 'Rippie', 'Conforto'],
    });
  }, [
    inputUsernameRef,
    inputNameRef,
    inputPicpayRef,
    inputEmailRef,
    inputCPFRef,
    inputTelRef,
    inputPwdRef,
    inputNewPwdRef,
  ]);

  return (
    <>
      <Container>
        <Title>Informações pessoais</Title>

        <Unform
          onSubmit={handleSubmit}
          style={{
            marginTop: '3%',
            width: '65%',
            display: 'flex',
            flexFlow: 'column',
          }}
        >
          <FirstSection>
            <PhotoContent>
              <File
                name="image1"
                width="100px"
                height="100px"
                defaultImage="http://localhost:3333/files/user/default.png"
              />
            </PhotoContent>
            <Username>
              <Label>Nome de usuário</Label>
              <User>{user.username}</User>
            </Username>
          </FirstSection>

          <Row>
            <Column>
              <Input
                labelText="Nome de usuário"
                fSize="14px"
                defaultValue={user.username}
                ref={inputUsernameRef}
                name="username"
                type="text"
                color="#569CCD"
                placeholder="Seu nome de usuário"
                required={true}
                size={21}
                onChange={(e) => setData(true)}
                input="input"
              />
            </Column>
            <Column>
              <Input
                labelText="Picpay"
                fSize="14px"
                defaultValue={user.picpay}
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
                defaultValue={user.name}
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
                defaultValue={user.CPF}
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
                defaultValue={user.email}
                ref={inputEmailRef}
                name="email"
                type="text"
                color="#569CCD"
                placeholder="Seu melhor e-mail"
                required={true}
                size={21}
                onChange={(e) => setData(true)}
                input="input"
              />
            </Column>
            <Column>
              <Input
                labelText="Telefone"
                fSize="14px"
                defaultValue={user.tel}
                ref={inputTelRef}
                name="tel"
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
                defaultValue={user.pwd}
                ref={inputPwdRef}
                name="pwd"
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
                defaultValue={user.newPwd}
                ref={inputNewPwdRef}
                name="newPwd"
                type="password"
                color="#569CCD"
                placeholder="**** nova senha se quiser"
                required={true}
                onChange={(e) => setData(true)}
                marginBottom="5%"
                input="input"
              />
            </Column>
          </Row>

          {data ? (
            <ContentButton>
              <Button type="reset">Cancelar</Button>
              <Button type="submit">Salvar alterações</Button>
            </ContentButton>
          ) : (
            <></>
          )}
        </Unform>
        <InterestCategories categories={user.categories}></InterestCategories>
        <Delete>
          <Link>Excluir conta</Link>
        </Delete>
      </Container>
    </>
  );
}
export default Personal;
