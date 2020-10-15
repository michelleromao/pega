import React from 'react'
import { End } from './style'
import {Link} from 'react-router-dom'

export default function Fim () {

    return (
        <>
            <End>
                <h4>Sua conta foi excluída!</h4>
                <h6>O Pega! agradece o seu tempo com a gente!</h6>
                <Link to="/">
                    <button>Me leve para tela inicial</button>
                </Link>
            </End>
        </>
    )
}