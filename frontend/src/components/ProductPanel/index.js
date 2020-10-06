import React, {useState} from 'react'
import {
    Content,
    Title,
    ValorDetalhes,
    Circle,
    MaisDinheiro,
    Rastreamento,
    Acompanhamento,
    Status,
    OutrosDetalhes,
    DetalhesVenda,
    H4,
    DetalhesItem,
    Infos,
    Product,
    ProductItem,
    Detalhes,
    Avaliacao,
    Details,
    BotaoDetails,
    User,
    Name
} from './style'
import FotoProduto from '../../assets/photos/photoproduct.png'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Stars from '../../assets/icons/stars.svg'

export default function MinhasCompras (props) {
    const [details, setDetails] = useState(true);
    return(
        <>
            <Content>
                {details ? 
                <>
                <Title>
                    <h4>{props.nome}</h4>
                    <span>{props.notify} notificação</span>
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
                        <Link onClick={() => setDetails(!details)}>
                            <span>Detalhes</span>
                            <FaChevronDown></FaChevronDown>
                        </Link>                        
                    </BotaoDetails>
                    
                </Details>
                </>
                            
            : 
            <>
                <Detalhes>
                    <DetalhesVenda>
                    <img src={FotoProduto}></img>
                    <Infos>
                        <H4>{props.nome}</H4>
                        <DetalhesItem>
                            <span>{props.estado}</span>
                            <span>{props.tamanho}</span>
                            <span>{props.cor}</span>
                        </DetalhesItem>
                        <ValorDetalhes><h3>R${props.valor}</h3><span>no {props.tipoPagamento}</span></ValorDetalhes>
                        <User>
                            <span>Vendido por </span><Name><span>{props.vendedor}</span></Name>
                        </User>                        
                    </Infos>
                    </DetalhesVenda>
                    
                    <OutrosDetalhes>
                        <h6>forma de pagamento</h6>
                        <span>{props.formaPagamento}</span>
                        <h6>forma de entrega</h6>  
                        <span>{props.formaEntrega}</span>
                    </OutrosDetalhes>                                                                  
                </Detalhes>
                <Acompanhamento>
                    <Circle></Circle>
                    <Status>
                        <h6>Pagamento realizado</h6>
                        <span>16 de Novembro - 18h</span>                        
                    </Status>
                    <Circle></Circle>
                    <Status>
                        <h6>Pagamento realizado</h6>
                        <span>16 de Novembro - 18h</span>                        
                    </Status>
                    <Circle></Circle>
                    <Status>
                        <h6>Produto enviado</h6>
                        <span></span>                        
                    </Status>
                    <Circle></Circle>
                    <Status>
                        <h6>Produto entregue</h6>
                        <span></span>                        
                    </Status>                                        
                    
                </Acompanhamento>
                <MaisDinheiro>
                    <div>
                        <h6>Você adicionou</h6>
                        <span>R${props.valorAdicionado}</span>
                    </div>                    
                    <div id="right">
                        <Link>+ Adicionar dinheiro</Link>
                        <Link>Avaliar pedido</Link>
                    </div>
                </MaisDinheiro>
                <Details>
                    <Rastreamento>
                    <h6>Código de rastreamento</h6>
                    <span>{props.rastreamento}</span>
                    </Rastreamento>
                    <BotaoDetails>
                        <Link onClick={() => setDetails(!details)}>
                            <span>Minimizar</span>
                            <FaChevronUp></FaChevronUp>
                        </Link> 
                    </BotaoDetails>
                    
                </Details>
                
            </>            
            }
            </Content>
        </>
    )
}