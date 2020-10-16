import React from 'react'
import { Link } from 'react-router-dom'
import {Content, Title, Links} from './style'

export default function HelpDelete () {
    return (
        <>
            <Content>
                <Title>Posso te ajudar <br />
                    em algo mais?
                </Title>
                <Links>
                    <Link>Alterar nome do usuário</Link>
                    <Link>Tire fotos que valorizam o produto</Link>
                    <Link>Confira nosso FAQ</Link>
                </Links>
            </Content>
        </>
    )
}