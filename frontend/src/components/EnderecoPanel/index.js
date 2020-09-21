import React from 'react'
import {Content, Title, Infos, Actions, Editar, Excluir, Username} from './style'


export default function EnderecoPanel(props) {
    return(
        <>
            <Content>
                <Infos>
                    <Title>
                        <Username>{props.username}</Username>
                        <h3>{props.principal}</h3>
                    </Title>
                    
                    <h4>{props.rua}</h4>
                    <span>{props.cidade}</span>
                    <span>{props.cep}</span>
                </Infos>
                <Actions>
                    <div></div>
                    <div>   
                        <Excluir>Excluir</Excluir>
                        <Editar>Editar</Editar>
                    </div>
                    
                </Actions>
            </Content>
        </>
    )
}