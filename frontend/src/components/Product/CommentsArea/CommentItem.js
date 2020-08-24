import React from 'react'
import './CommentItem.css'

export default function CommentItem (props) {
    return (
        <div className="comentario">
        <div className="perfil">
            <img src={props.foto}></img>
            <div className="nome">
                <p>{props.nome}</p>
                <span>{props.cidade}</span>
            </div>
            
        </div>
        <div className="dialogo">
            <p id="pergunta">{props.pergunta}</p>
            <p>R. {props.resposta}</p>                    
        </div>        
        <span id="tag">{props.tag}</span>
        </div>
    )
}