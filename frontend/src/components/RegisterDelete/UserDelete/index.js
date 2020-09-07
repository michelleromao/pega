import React from 'react'
import {Exclusao, Title, InfoExclusao, FinalizarExclusao, Text, TextRed, User, UserInfos, CTAExclusao} from './style'
import Fernanda from '../../../assets/photos/userphoto.png'

export default function UserDelete () {
    return (
        <>
            <Exclusao>
                <Title>
                    <h4>Excluir conta</h4>
                    <span>Nem, fui enganado!</span>
                </Title>
                <InfoExclusao>
                    <TextRed>Poxa, Fernanda, achei que a gente tivesse uma conexão especial. Pegou,
curtiu e seguiu em frente. Depois aparece pedindo pra voltar.</TextRed>
                    <Text>Brincadeira! Aqui todo mundo é maduro. Mas a gente tem que te avisar que, se você excluir sua conta,
todos os seus dados na plataforma serão deletados permanentemente.</Text>
                </InfoExclusao>

                <FinalizarExclusao>
                    <User>
                        <img src={Fernanda}></img>
                        <UserInfos>
                            <p>Fernanda Gadêlha</p>                        
                            <span>fernanda2020</span>
                        </UserInfos>
                    </User>
                    <CTAExclusao>
                        <p>Clique para excluir</p>
                        <button>Tudo acabado entre nós</button>
                    </CTAExclusao>
                </FinalizarExclusao>
            </Exclusao>
        </>
    )
}