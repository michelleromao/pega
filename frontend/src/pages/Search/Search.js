import React, { useEffect, useState } from 'react';
import { Container, Items, ContainerAnnouncements } from './SearchStyled';
import Filter from '../../components/FilterDetails/Filter';
import OrderBy from '../../components/OrderBy/OrderBy';
import api from '../../services/api';
import Anuncio from '../../components/ProductSmall/index';
export default function Search() {
  const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await api.get('/announcements/');
            setProdutos(data);
        }
        getProduct();
    }, [produtos]);
    return (
        <Container>
            <Filter />
            <div className="vitrine">
                <div className="orderby"><OrderBy /></div>
                <ContainerAnnouncements>

                {
                    produtos.map(
                        produto => {
                            return (
                            <Items>
                                <Anuncio
                                    key={produto.idAnnouncement}
                                    id={produto.idAnnouncement}
                                    title={produto.title}
                                    price={produto.initPrice}
                                    promo={produto.offert ? produto.valueOffert : ''}
                                    size={"250px"}

                                />
                            </Items>
                            );
                        }
                    )
                }
                </ContainerAnnouncements>


            </div>
        </Container>
    );
}
