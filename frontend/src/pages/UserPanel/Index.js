import React from 'react'
import Menu from '../../components/PanelMenu'
import ContentPanel from '../../components/PanelContent'
import { PanelUser } from './style'

export default function Panel() {
    return (
        <>
             <PanelUser>
                <Menu></Menu>
                <ContentPanel></ContentPanel>
             </PanelUser>
        </>
    )
}