import React from 'react'
import PanelMenu from '../../components/PanelMenu'
import PanelContent from '../../components/PanelContent'
import {PanelUser, Title} from './style'
import ProductPanel from '../../components/ProductPanel'

export default function Panel() {
    return (
        <>        
        <PanelUser>
            <PanelMenu></PanelMenu>
            <PanelContent>
                <ProductPanel nome="Camisa Vasco Kappa 2020" notify="1" valor="50" vendedor="Michelle" data="15 Novembro"></ProductPanel>
            </PanelContent>
            
        </PanelUser>            
        </>
    )
}