import React from 'react' 
import {Link} from 'react-router-dom'
import {Content, Title, Actions, BoxCategorias, Categoria, Categorias, Botoes} from './style'
import Camiseta from '../../assets/icons/Camisa'


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

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Punk</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Geek</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Floral</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Gótica</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Tropical</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Casual</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Vintage</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Gótica</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Tropical</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Casual</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Vintage</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Gótica</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Tropical</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Casual</h4>
                        </Categoria>

                        <Categoria>
                            <Camiseta></Camiseta>
                            <h4>Vintage</h4>
                        </Categoria>

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