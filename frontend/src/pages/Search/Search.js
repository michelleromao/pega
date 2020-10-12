import React, { useEffect, useState } from 'react';
import { Container } from './SearchStyled';
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
                <div className="produtos">
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
                
            </div>
        </Container>
    );
}