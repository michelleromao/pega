import React from 'react'
import {Content, Title, Product, ProductItem, Avaliacao, Details, BotaoDetails, User, Name} from './style'
import FotoProduto from '../../assets/photos/photoproduct.png'
import {FaChevronDown} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Stars from '../../assets/icons/stars.svg'

export default function MinhasCompras (props) {
    return(
        <>
            <Content>
                <Title>
                    <h4>{props.nome}</h4>
                    <span>{props.notify}</span>
                </Title>
                <Product>
                    <ProductItem>
                        <img src={FotoProduto}></img>
                        <span>Pedido realizado<br/>{props.data}</span>
                    </ProductItem>
                    <span>R${props.valor}</span>
                    <User>
                        <span>Vendido por</span><Name><span>{props.vendedor}</span></Name>
                    </User>
                    
                    <Avaliacao>
                        <span><img src={Stars}></img></span>
                    </Avaliacao>
                </Product>
                <Details>
                    <div></div>
            
                    <BotaoDetails>
                        <Link>
                            <span>Detalhes</span>
                            <FaChevronDown></FaChevronDown>
                        </Link>                        
                    </BotaoDetails>
                    
                </Details>
            </Content>
        </>
    )
}