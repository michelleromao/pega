import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import ActionButton from '../../components/ActionButton';
import Input from '../../components/Input';

import Test from '../../assets/photos/test.jpg';

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

function Signup() {
  const history = useHistory();

  const [active, setActive] = useState(false);
  const [colorPwd, setColorPwd] = useState('#BE5599');
  const [text, setText] = useState('');
  function handleSubmit(data) {
    if (data.password !== data.passwordconfirm) {
      setActive(true);
      setText('Ei, as senhas precisam estar iguais!');
      setColorPwd('#ea5254');
    } else {
      const user = data.name.split(' ');
      localStorage.setItem('user', user[0]);
      history.push('/success');
    }
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
          <img src={Test} alt="" />
        </Illustration>
        <Container>
          <Title>Crie sua conta</Title>

          <Form>
            {active ? <Error text={text} /> : <></>}
            <Unform
              onSubmit={handleSubmit}
              style={{
                width: '40%',
                display: 'flex',
                flexFlow: 'column',
              }}
            >
              <Input
                labelText="Nome"
                name="name"
                type="text"
                color="#BE5599"
                placeholder="Qual seu nome?"
                size="170%"
                required={true}
              />
              <Input
                labelText="E-mail"
                name="email"
                type="email"
                color="#BE5599"
                placeholder="Diz seu e-mail pra gente"
                size="170%"
                required={true}
              />
              <Input
                labelText="Senha"
                name="password"
                type="password"
                color="#BE5599"
                placeholder="******** (ninguém tá olhando viu)"
                size="170%"
                required={true}
              />
              <Input
                labelText="De novo a senha"
                name="passwordconfirm"
                type="password"
                color={colorPwd}
                placeholder="******** (confirma pra gente)"
                size="170%"
                required={true}
              />
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
