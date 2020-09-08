import React from 'react'
import {Content, CTA, Cancelar, Confirmar} from './style'

export default function ConfirmDelete() {
    return (
        <>
            <Content>
                <h4>Você confirma que está excluindo a sua conta permanentemente?</h4>
                <CTA>
                    <Cancelar>Cancelar</Cancelar>
                    <Confirmar>Confirmar</Confirmar>
                </CTA>
            </Content>
        </>
    )
}