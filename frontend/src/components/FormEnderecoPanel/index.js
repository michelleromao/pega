import React from 'react'
import {Content, Title, Voltar, Adicionar, Endereco, Numero, Complemento, Bairro, Cidade, Estado, Pais, Check, Line, Formulario, Cep, Actions} from './style'

export default function FormEndereco (props) {
    return (
        <>
        <Content>
            <Title>
                Adicionar novo endereço
            </Title>
            <Formulario>
                <Line>
                    <Cep>CEP
                        <input type="text"></input>
                    </Cep>
                    <Check>
                        <input type="checkbox"></input>
                        Endereço principal
                    </Check>
                </Line>
                <Endereco>
                    Endereço 
                    <input type="text"></input>                    
                </Endereco>
                
                <Numero>
                    Número 
                    <input type="text"></input> 
                </Numero>

                <Complemento>
                    Complemento 
                    <input type="text"></input> 
                </Complemento>

                <Bairro>
                    Bairro 
                    <input type="text"></input>                    
                </Bairro>
                <Cidade>
                    Cidade 
                    <input type="text"></input>                    
                </Cidade>
                <Estado>
                    Estado 
                    <input type="text"></input>                    
                </Estado>
                <Pais>
                    País 
                    <input type="text"></input>                    
                </Pais>
            </Formulario>
            <Actions>
                <div></div>
                <div>
                    <Voltar>Voltar</Voltar>
                    <Adicionar>Adicionar</Adicionar>
                </div>
                
            </Actions>
        </Content>            
        </>
    )
}