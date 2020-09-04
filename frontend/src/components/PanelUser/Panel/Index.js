import React from 'react'
import './Index.css'
import Menu from '../PanelMenu/PanelMenu'
import Content from '../PanelContent/PanelContent'

export default function Panel() {
    return (
        <>
             <div className="panel">
                <Menu></Menu>
                <Content></Content>
             </div>
        </>
    )
}