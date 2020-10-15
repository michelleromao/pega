import React, {useState} from 'react'
import ConfirmDelete from '../../components/ConfirmDelete'
import UserDelete from '../../components/UserDelete'
import WhyDelete from '../../components/WhyDelete'
import Help from '../../components/HelpDelete'
import { Content, Ends } from './style'

export default function ExcluirConta () {
    const [ends, setEnds] = useState(false)

    return (
        <>

        { ends ?
            <>

            <Ends>
                <h4>Sua conta foi excluída!</h4>
                <h6>O Pega! agradece o seu tempo com a gente!</h6>
            </Ends>
            
            </>
        :
        <Content>
            <UserDelete cta={ <button type="submit">Enviar</button> } nomeUsuario="Fernanda Gadelha" arroba="@fernandagadelha"></UserDelete>
            <Help></Help>
        </Content>
        }   
        </>
            
    )
}