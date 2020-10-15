import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import ActionButton from '../../components/ActionButton';
import Input from '../../components/Input';

import Sun from '../../assets/illustrations/sun.png';

import {
  LogoContent,
  Form,
  Title,
  Illustration,
  Container,
  Row,
  Terms,
  Login,
} from './style';
import Logo from '../../assets/Logo';
import Error from '../../components/Error';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../store/modules/user/action';
import api from '../../services/api';

function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [colorPwd, setColorPwd] = useState('#BE5599');
  const [text, setText] = useState('');
  async function handleSubmit(data) {
    const request = await api.post('/users/', data);
    dispatch(userSignUp(request.data));
    history.push('/');
  }

  return (
    <>
      <LogoContent>
        <Link to="/">
          <Logo color="#569CCD" />
        </Link>
      </LogoContent>
      <Row>
        <Illustration>
          <img src={Sun} alt="" />
        </Illustration>
        <Container>
          <Title>Crie sua conta</Title>

          <Form>
            {active ? <Error text={text} /> : <></>}
            <Unform
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
              }}
            >
              <div>
                <Input
                  fSize="18px"
                  labelText="Nome"
                  name="name"
                  type="text"
                  color="#BE5599"
                  placeholder="Qual seu nome?"
                  size="90%"
                  required={true}
                  marginBottom="8%"
                  input="input"
                />
                <Input
                  fSize="18px"
                  labelText="E-mail"
                  name="email"
                  type="email"
                  color="#BE5599"
                  placeholder="Diz seu e-mail pra gente"
                  size="90%"
                  required={true}
                  marginBottom="8%"
                  input="input"
                />
                    <Input
                    fSize="18px"
                    labelText="Senha"
                    name="senha"
                    type="password"
                    password={true}
                    color="#BE5599"
                    placeholder="********"
                    size="94%"
                    required={true}
                    marginBottom="8%"
                    input="input"
                />
                <Input
                  fSize="18px"
                  labelText="Telefone"
                  name="telefone"
                  type="text"
                  color="#BE5599"
                  placeholder="(88) 9 9999 9999"
                  mask="(99)\ 9 9999 9999"
                  maskPlaceholder={null}
                  size="90%"
                  required={true}
                  marginBottom="10%"
                  input="input"
                />
                <Input
                  fSize="18px"
                  labelText="CPF"
                  name="cpf"
                  type="text"
                  color="#BE5599"
                  placeholder="seu CPF"
                  size="90%"
                  required={true}
                  marginBottom="10%"
                  input="input"
                />
              </div>
              <Terms>
                Ao criar sua conta você concorda com tudim dos nossos{' '}
                <Link>Termos de uso</Link>
              </Terms>

              <ActionButton text="Criar conta" />
            </Unform>
            <Login>
              Já tem um cadastro? <Link to="/login">Corre aqui!</Link>
            </Login>
          </Form>
        </Container>
      </Row>
    </>
  );
}
export default Signup;
