import React, {useEffect, useState} from 'react'
import {
    Content,
    Title,
    ValorDetalhes,
    Circle,
    MaisDinheiro,
    Rastreamento,
    Acompanhamento,
    RastreamentoInput,
    Status,
    OutrosDetalhes,
    DetalhesVenda,
    Endereco,
    H4,
    DetalhesItem,
    Centro,
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
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Stars from '../../assets/icons/stars.svg'
import api from '../../services/api';

export default function MinhasCompras (props) {
    const [details, setDetails] = useState(true);
    const [venda, setVenda] = useState((props.tipo === "venda"))

    const [photoProduct, setPhotoProduct] = useState();
    useEffect(() => {
      async function loadPhoto() {
        const photo = await api.get(`/photosannouncement/${props.id}`);
        setPhotoProduct(photo.data[0].originalname[0]);
      }
      loadPhoto();
    }, []);

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
                        <img src={`http://localhost:3333/files/announcement/${photoProduct}`}></img>
                        <span>Pedido realizado<br/>{props.data}</span>
                    </ProductItem>
                    <span>R${props.valor}</span>
                    <User>
                        {venda ?
                        <>
                        </>
                         :
                        <>
                            <span>Vendido por</span><Name><span>{props.vendedor}</span></Name>
                        </>
                        }
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
                    <img src={`http://localhost:3333/files/announcement/${photoProduct}`}></img>
                    <Infos>
                        <H4>{props.nome}</H4>
                        <DetalhesItem>
                            <span>{props.estado}</span>
                            <span>{props.tamanho}</span>
                            <span>{props.cor}</span>
                        </DetalhesItem>
                        <ValorDetalhes><h3>R${props.valor}</h3><span>no {props.tipoPagamento}</span></ValorDetalhes>
                        <User>
                            { venda ?
                            <>
                            </>
                             :
                             <>
                                <span>Vendido por </span><Name><span>{props.vendedor}</span></Name>
                             </>

                            }

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
                <Centro>
                { venda ?
                    <>

                        <div></div>
                    </>
                    :
                    <>
                    <div>
                        <h6>Você adicionou</h6>
                        <span>R${props.valorAdicionado}</span>
                    </div>
                    <div id="right">
                        <MaisDinheiro>
                            <Link>+ Adicionar dinheiro</Link>
                            <Link>Avaliar pedido</Link>
                        </MaisDinheiro>
                    </div>
                    </>
                    }
                </Centro>


                <Details>
                    <div>

                    { venda ?
                    <>
                    <h5>Código de rastreamento</h5>
                    <RastreamentoInput placeholder="Digite o código" />
                    </>


                     :
                     <>
                     <h6>Código de rastreamento</h6>
                     <Rastreamento>
                         <span>{props.rastreamento}</span>
                     </Rastreamento>
                     </>

                    }
                    </div>


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
