import React from 'react'
import './Index.css'
import Menu from './PanelMenu'
import Content from './PanelContent'

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