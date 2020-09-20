import React from 'react'
import PanelMenu from '../../components/PanelMenu'
import PanelContent from '../../components/PanelContent'
import {PanelUser, Title} from './style'

export default function Panel() {
    return (
        <>        
        <PanelUser>
            <PanelMenu></PanelMenu>
            <PanelContent>
                <Title>Minhas aaaaaaaaa</Title>
            </PanelContent>
        </PanelUser>            
        </>
    )
}