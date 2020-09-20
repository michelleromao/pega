import React from 'react'
import {Content, Item} from './style'

export default function FilterPanel (props) {
    return (
        <>
            <Content>
                <Item>Todas as compras</Item>
                <Item>Compras em andamento</Item>
                <Item>Compras concluidas</Item>
            </Content>
        </>
    )
}