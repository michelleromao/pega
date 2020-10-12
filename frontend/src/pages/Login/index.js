import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form as Unform } from '@unform/web';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/modules/user/action';
import ActionButton from '../../components/ActionButton';
import Input from '../../components/Input';

import { LogoContent, Form, Title, Help, Signin } from './style';
import Logo from '../../assets/Logo';
import Error from '../../components/Error';

import api from '../../services/api';

function Login() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [active, setActive] = useState(false);
  const [colorEmail, setColorEmail] = useState('#BE5599');
  const [colorPwd, setColorPwd] = useState('#BE5599');
  const [text, setText] = useState('');
  async function handleSubmit(data) {
    const { email, password } = data;
    const request = await api.post('/authenticate/', data);
    if (request.data.message === 'Esse e-mail não existe aqui, viu?') {
      setText('Foi mal aí, mas não encontramos uma conta com esse e-mail não.');
      setActive(true);
      setColorEmail('#ea5254');
    } else if (
      request.data.message === 'Senha: algo de errado não está certo'
    ) {
      setText('Ish, essa senha parece está errada, confere ai.');
      setActive(true);
      setColorPwd('#ea5254');
    } else {
      dispatch(userLogin(request.data[0]));
      history.push('/');
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
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <Input
              fSize="18px"
              labelText="Seu e-mail"
              name="email"
              type="email"
              color={colorEmail}
              placeholder="Escreve seu e-mail aqui"
              size="90%"
              required={true}
              marginBottom="15%"
              input="input"
            />
            <Input
              fSize="18px"
              labelText="Senha"
              name="password"
              type="password"
              color={colorPwd}
              placeholder="******** (ninguém tá olhando viu)"
              size="90%"
              required={true}
              marginBottom="15%"
              input="input"
            />
          </div>
          <ActionButton text="Entrar" />
        </Unform>

        <Help>
          Esqueceu os dados de login? <Link to="/recovery">A gente te ajuda</Link>
        </Help>
        <Signin>
          Ainda não tem cadastro? <Link to="/signup">Corre aqui!</Link>
        </Signin>
      </Form>
    </>
  );
}
export default Login;
