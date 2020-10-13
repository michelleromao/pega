import React from 'react' 
import {Link} from 'react-router-dom'
import {Content, Title, Actions, BoxCategorias, Categoria, Categorias, Botoes} from './style'
import Camiseta from '../../assets/icons/Camisa'
import Category from '../../components/ButtomCategory'

export default function CategoriaSelect (props) {
    return (
        <>
            <Content>
                <Title>
                    <h4>Categorias de interesse</h4>
                    <h5>Selecione 3 estilos que você mais quer ver no Pega!</h5>
                </Title>
                <BoxCategorias>
                    <Categorias>
                        <Category icon="heart" nameCategory="Loved"></Category>
                        <Category icon="heart" nameCategory="Loved"></Category>
                        <Category icon="heart" nameCategory="Loved"></Category>
                        <Category icon="heart" nameCategory="Loved"></Category>
                        <Category icon="heart" nameCategory="Loved"></Category>
                        <Category icon="heart" nameCategory="Loved"></Category>
                    </Categorias>
                </BoxCategorias>
                
                <Actions>
                    <div></div>
                    <Botoes>
                        <Link to="">Voltar</Link>
                        <button>Confirmar</button>
                    </Botoes>
                </Actions>
            </Content>
        </>
    )
}