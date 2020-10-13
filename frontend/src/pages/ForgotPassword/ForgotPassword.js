import React from 'react';
import { LogoContent, Title} from '../../pages/Login/style';
import {Container} from './ForgotPasswordStyled';
import Logo from '../../assets/Logo';
import { Link,} from 'react-router-dom';
export default function ForgotPassword(){
    return (
        <>
            <LogoContent>
                <Link to="/">
                    <Logo color="#569CCD" />
                </Link>
            </LogoContent>
            <Container>
             <h1>Esqueceu seus dados de Login?</h1>
             <p>Escolha a forma como prefere recuperar seus dados</p>
             <div>
                <label>E-mail ou nome de usuário</label>
                <input placeholder='E-mail ou nome de usuário'/>
                <button>Enviar</button>
                <label>Código enviado por celular</label>
                <input placeholder='Insira número de telefone'/>
                <button>Enviar</button>
             </div>
            </Container>
        </>
    );
}