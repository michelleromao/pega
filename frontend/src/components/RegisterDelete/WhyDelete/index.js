import React from 'react'
import {WDelete, Title} from './style'

export default function WhyDelete () {
    return (
        <>
            <WDelete>
                <Title>
                    <h4>Excluir conta</h4>
                    <span>Nem, fui enganado!</span>
                </Title>
                <form>
                    <h5>Será que você poderia ajudar a gente a entender o motivo da despedida?
É rapidinho!</h5>
                    <label class="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Já tenho outra conta
                    </label>
                    <label class="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Não estou vendendo bem
                    </label>
                    <label id="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Outro
                    </label> 
                    <textarea placeholder="Conte pra gente"></textarea>
                    <button>Enviar</button>                 
                </form>
            </WDelete>
        </>
    )    
}