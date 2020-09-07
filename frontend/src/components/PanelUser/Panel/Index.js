import React from 'react'
import './Index.css'
import Menu from '../PanelMenu/PanelMenu'
import Content from '../PanelContent/PanelContent'
import { PanelUser } from './style'

export default function Panel() {
    return (
        <>
             <PanelUser>
                <Menu></Menu>
                <Content></Content>
             </PanelUser>
        </>
    )
}