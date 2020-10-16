import React, {useState} from 'react'
import ConfirmDelete from '../../components/ConfirmDelete'
import UserDelete from '../../components/UserDelete'
import WhyDelete from '../../components/WhyDelete'
import Help from '../../components/HelpDelete'
import { Content } from './style'

export default function ExcluirConta () {

    return (
        <>
        <Content>
            <UserDelete cta={ <button type="submit">Enviar</button> } nomeUsuario="Fernanda Gadelha" arroba="@fernandagadelha"></UserDelete>
            <Help></Help>
        </Content>
        </>

    )
}
