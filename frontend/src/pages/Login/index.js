import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

import ActionButton from '../../components/ActionButton';
import Input from '../../components/Input';

import { LogoContent, Form, Title, Help, Signin } from './style';
import Logo from '../../assets/Logo';
import Error from '../../components/Error';

function Login() {
  const history = useHistory();

  const [active, setActive] = useState(false);
  const [colorEmail, setColorEmail] = useState('#BE5599');
  const [colorPwd, setColorPwd] = useState('#BE5599');
  const [text, setText] = useState('');
  function handleSubmit(data) {
    //conexao backend, pegar primeiro nome do user e setar ali,
    //checa se existe user com esse email,
    //se nao, coloca ali no else
    if (
      data.email === 'michelle.nunes10@gmail.com' &&
      data.password === '123'
    ) {
      localStorage.setItem('user', 'Michelle');
      history.push('/');
    } else if (data.email !== 'michelle.nunes10@gmail.com') {
      setText('Foi mal aí, mas não encontramos uma conta com esse e-mail não.');
      setActive(true);
      setColorEmail('#ea5254');
    } else if (data.password !== '123') {
      setText('Ish, essa senha parece está errada, confere ai.');
      setActive(true);
      setColorPwd('#ea5254');
    }
  }

  return (
    <>
      <LogoContent>
        <Link to="/">
          <Logo color="#569CCD" />
        </Link>
      </LogoContent>
      <Title>Login</Title>

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
            labelText="Seu e-mail"
            name="email"
            type="email"
            color={colorEmail}
            placeholder="Escreve seu e-mail aqui"
            size="170%"
            required={true}
          />
          <Input
            labelText="Senha"
            name="password"
            type="password"
            color={colorPwd}
            placeholder="******** (ninguém tá olhando viu)"
            size="170%"
            required={true}
          />
          <ActionButton text="Entrar" />
        </Unform>
        <Help>
          Esqueceu os dados de login? <Link>A gente te ajuda</Link>
        </Help>
        <Signin>
          Ainda não tem cadastro? <Link to="/signup">Corre aqui!</Link>
        </Signin>
      </Form>
    </>
  );
}
export default Login;
