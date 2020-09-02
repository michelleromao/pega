import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import InterestCategories from '../InterestCategories';
import Input from '../Input';
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
    email: 'michelle.nunes10@gmail.com',
    CPF: '',
    tel: '',
    pwd: '123',
    categories: ['Geek', 'Rippie', 'Conforto'],
  });

  const [data, setData] = useState(false);

  const inputUsernameRef = useRef(user.username);
  const inputNameRef = useRef(user.name);
  const inputEmailRef = useRef(user.email);
  const inputCPFRef = useRef(user.CPF);
  const inputTelRef = useRef(user.tel);
  const inputPwdRef = useRef(user.pwd);

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
      email: inputEmailRef.current,
      CPF: inputCPFRef.current,
      tel: inputTelRef.current,
      pwd: inputPwdRef.current,
      categories: ['Geek', 'Rippie', 'Conforto'],
    });
  }, [
    inputUsernameRef,
    inputNameRef,
    inputEmailRef,
    inputCPFRef,
    inputTelRef,
    inputPwdRef,
  ]);

  return (
    <>
      <Container>
        <Title>Informações pessoais</Title>
        <FirstSection>
          <PhotoContent>
            <img src={photo.photo} alt="Foto de usuário" />
            <Link>
              <Action
                color="#569CCD"
                onClick={(e) => setPhoto({ photo: Nanda, name: `${Nanda}` })}
              >
                Alterar foto
              </Action>
            </Link>
            {photo.name === Default ? (
              <Action></Action>
            ) : (
              <Link>
                <Action
                  color="#E27475"
                  onClick={(e) =>
                    setPhoto({ photo: Default, name: `${Default}` })
                  }
                >
                  Remover foto
                </Action>
              </Link>
            )}
          </PhotoContent>
          <Username>
            <Label>Nome de usuário</Label>
            <User>{user.username}</User>
          </Username>
        </FirstSection>
        <Unform
          onSubmit={handleSubmit}
          style={{
            marginTop: '3%',
            width: '65%',
            display: 'flex',
            flexFlow: 'column',
          }}
        >
          <Row>
            <Column>
              <Input
                labelText="Nome de usuário"
                fSize="14px"
                marginleft="6.5"
                defaultValue={user.username}
                ref={inputUsernameRef}
                name="username"
                type="text"
                color="#569CCD"
                placeholder="Seu nome de usuário"
                required={true}
                size={21}
                onChange={(e) => setData(true)}
              />
            </Column>
            <Column>
              <Input
                labelText="CPF"
                fSize="14px"
                marginleft="8"
                defaultValue={user.CPF}
                ref={inputCPFRef}
                name="cpf"
                type="number"
                color="#569CCD"
                placeholder="Seu CPF"
                required={true}
                onChange={(e) => setData(true)}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input
                labelText="Nome"
                fSize="14px"
                marginleft="6.5"
                defaultValue={user.name}
                ref={inputNameRef}
                name="name"
                type="text"
                color="#569CCD"
                placeholder="Seu lindo nome"
                required={true}
                size={21}
                onChange={(e) => setData(true)}
              />
            </Column>
            <Column>
              <Input
                labelText="Telefone"
                fSize="14px"
                marginleft="8"
                defaultValue={user.tel}
                ref={inputTelRef}
                name="tel"
                type="text"
                color="#569CCD"
                placeholder="(00) 0 0000 0000"
                maxLength={11}
                required={true}
                onChange={(e) => setData(true)}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input
                labelText="E-mail"
                fSize="14px"
                marginleft="6.5"
                defaultValue={user.email}
                ref={inputEmailRef}
                name="email"
                type="text"
                color="#569CCD"
                placeholder="Seu melhor e-mail"
                required={true}
                size={21}
                onChange={(e) => setData(true)}
              />
            </Column>
            <Column>
              <Input
                labelText="Senha"
                fSize="14px"
                marginleft="8"
                defaultValue={user.pwd}
                ref={inputPwdRef}
                name="pwd"
                type="password"
                color="#569CCD"
                placeholder="*****************"
                required={true}
                onChange={(e) => setData(true)}
                marginBottom="5%"
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
