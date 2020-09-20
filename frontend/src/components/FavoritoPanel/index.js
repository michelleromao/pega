import React from 'react' 
import Coracao from '../../assets/icons/Coracao'
import FotoProduto from '../../assets/photos/photoproduct.png'
import {Content, Photo, Infos, NamePrice, PriceOld, Price, Prices, Name, Favorito, Botao} from './styles'

export default function (props) {
    return (
        <>
            <Content>
                <Photo>
                    <img src={FotoProduto}></img>
                </Photo>
                <Infos>
                    <NamePrice>
                        <Name>{props.nome}</Name>
                        <Prices>
                            <PriceOld>R${props.precoAntes}</PriceOld>
                            <Price> R${props.precoDepois}</Price>   
                        </Prices>                                             
                    </NamePrice>                      
                    <Coracao />                   
                </Infos>
                <Botao>Adicionar a sacola</Botao>
            </Content>
        </>
    )
}