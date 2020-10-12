import React, { useEffect, useState } from 'react';
import { Container } from './SearchStyled';
import Filter from '../../components/FilterDetails/Filter';
import OrderBy from '../../components/OrderBy/OrderBy';
import api from '../../services/api';
import Anuncio from '../../components/ProductSmall/index';
export default function Search() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await api.get('/announcements/');
            setProdutos(data);
        }
        getCategory();
    }, [produtos]);
    return (
        <Container>
            <Filter />
            <div className="orderby">
                <OrderBy />
                {
                    produtos.map(
                        produto => {
                            return (

                                <Anuncio
                                    key={produto.id}
                                    id={produto.id}
                                    title={produto.title}
                                    price={produto.initPrice}
                                    promo={produto.offert ? produto.valueOffert : ''}
                                />

                               
                            );
                        }
                    )
                }
            </div>
        </Container>
    );
}