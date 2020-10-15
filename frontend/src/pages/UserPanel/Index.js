import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import PanelMenu from '../../components/PanelMenu'
import PanelContent from '../../components/PanelContent'
import {PanelUser, Title, Content, Sidebar, Hove, Favs, Filter, Item} from './style'
import ProductPanel from '../../components/ProductPanel'
import Foto from '../../assets/photos/userphoto.png'
import PersonalInformation from '../../components/Personal'
import AnuncioPanel from '../../components/AnuncioPanel'
import Endereco from '../../components/EnderecoPanel'
import Favorito from '../../components/FavoritoPanel'
import api from '../../services/api';

export default function Panel() {
   const idUser = useSelector((user) => user.user.idUser);
    const name = useSelector((user) => user.user.name);
    const history = useHistory();
    const [photo, setPhoto] = useState();
    const [stateAnuncios, setStateAnuncios] = useState(0);
    const [stateVendas, setStateVendas] = useState(0);
    const [stateCompras, setStateCompras] = useState(0);

    const [stateAllPurchases, setAllPurchases] = useState();
    const [stateProgressPurchases, setProgressPurchases] = useState();
    const [stateCompletedPurchases, setCompletedPurchases] = useState();
    const [stateCanceledPurchases, setCanceledPurchases] = useState();

    const [stateAllSales, setAllSales] = useState();
    const [stateProgressSales, setProgressSales] = useState();
    const [stateCompletedSales, setCompletedSales] = useState();
    const [stateCanceledSales, setCanceledSales] = useState();

    const [stateAllAnnouncements, setAllAnnouncements] = useState();
    const [statePublishedAnnouncements, setPublishedAnnouncements] = useState();
    const [statePausedAnnouncements, setPausedAnnouncements] = useState();
    const [stateSoldAnnouncements, setSoldAnnouncements] = useState();
    const [stateDraftAnnouncements, setDraftAnnouncements] = useState();
    const [stateReservedAnnouncements, setReservedAnnouncements] = useState();

    const [infos, setInfos] = useState(true);
    const [compras, setCompras] = useState(false);
    const [anuncios, setAnuncios] = useState(false);
    const [vendas, setVendas] = useState(false);
    const [enderecos, setEnderecos] = useState(false);
    const [favoritos, setFavoritos] = useState(false);

    function resetState() {
        setInfos(false)
        setCompras(false)
        setVendas(false)
        setAnuncios(false)
        setEnderecos(false)
        setFavoritos(false)
    }

    function click (hook) {
        resetState()
        hook(!false)
    }

    if(!idUser){
      history.push('/');
    }
      useEffect(()=>{
        const loadPhoto = async () => {
          if(idUser){
            const photoUser = await api.get(`/photosuser/${idUser}`);
            console.log(photoUser);
            setPhoto(photoUser.data[0].filename);
          }
        }
        const loadPurchases = async () => {
          if(idUser){
            const allPurchases = await api.get(`/transactions/?compras=${idUser}`);
            const progressPurchases = await api.get(`/transactions/?compras=${idUser}&andamento=true`);
            const completedPurchases = await api.get(`/transactions/?compras=${idUser}&completed=true`);
            const canceledPurchases = await api.get(`/transactions/?compras=${idUser}&canceled=true`);
            if(allPurchases && progressPurchases && completedPurchases && canceledPurchases){
              if(Array.isArray(allPurchases.data)){
                allPurchases.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/${a}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setAllPurchases(complete[0]);
                   });
                });
              }
              if(Array.isArray(progressPurchases.data)){
                progressPurchases.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/${a}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setProgressPurchases(complete[0]);
                   });
                });
              }
              if(Array.isArray(completedPurchases.data)){
                completedPurchases.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/${a}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setCompletedPurchases(complete[0]);
                   });
                });
              }
              if(Array.isArray(canceledPurchases.data)){
                canceledPurchases.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/${a}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setCanceledPurchases(complete[0]);
                   });
                });
              }
            }
          }
        }
        const loadSales = async () => {

                    if(idUser){
            const allSales = await api.get(`/transactions/?vendas=${idUser}`);
            const progressSales = await api.get(`/transactions/?vendas=${idUser}&andamento=true`);
            const completedSales = await api.get(`/transactions/?vendas=${idUser}&completed=true`);
            const canceledSales = await api.get(`/transactions/?vendas=${idUser}&canceled=true`);
            if(allSales && progressSales && completedSales && canceledSales){
              if(Array.isArray(allSales.data)){
                allSales.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/?id=${a}&idOwner=${idUser}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setAllSales(complete[0]);
                   });
                });
              }
              if(Array.isArray(progressSales.data)){
                progressSales.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/?id=${a}&idOwner=${idUser}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setProgressSales(complete[0]);
                   });
                });
              }
              if(Array.isArray(completedSales.data)){
                completedSales.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/?id=${a}&idOwner=${idUser}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setCompletedSales(complete[0]);
                   });
                });
              }
              if(Array.isArray(canceledSales.data)){
                canceledSales.data.map(d =>{
                  const announcement = d.announcements.map(async a =>{
                    const response = await api.get(`/announcements/?id=${a}&idOwner=${idUser}`);
                    return response.data;
                  });
                  Promise.all(announcement).then((complete) =>{
                    setCanceledSales(complete[0]);
                   });
                });
              }
            }
                      }
        }
        const announcements = async () => {

                    if(idUser){
            const allAnnouncements = await api.get(`/announcements/?idOwner=${idUser}`);
            const publishedAnnouncements = await api.get(`/announcements/?idOwner=${idUser}&published=true`);
            const pausedAnnouncements = await api.get(`/announcements/?idUser=${idUser}&paused=true`);
            const soldAnnouncements = await api.get(`/announcements/?idOwner=${idUser}&sold=true`);
            const draftAnnouncements = await api.get(`/announcements/?idOwner=${idUser}&draft=true`);
            const reservedAnnouncements = await api.get(`/announcements/?idOwner=${idUser}&reserved=true`);

            if(allAnnouncements ){
              if(Array.isArray(allAnnouncements.data.promiseUser)){
                setAllAnnouncements(allAnnouncements.data.promiseUser);
              }
              if(Array.isArray(publishedAnnouncements.data.promiseUser)){
                setPublishedAnnouncements(publishedAnnouncements.data.promiseUser);
              }
              if(Array.isArray(pausedAnnouncements.data.promiseUser)){
                setPausedAnnouncements(pausedAnnouncements.data.promiseUser);
              }
              if(Array.isArray(soldAnnouncements.data.promiseUser)){
                setSoldAnnouncements(soldAnnouncements.data.promiseUser);
              }
              if(Array.isArray(draftAnnouncements.data.promiseUser)){
                setDraftAnnouncements(draftAnnouncements.data.promiseUser);
              }
              if(Array.isArray(reservedAnnouncements.data.promiseUser)){
                setReservedAnnouncements(reservedAnnouncements.data.promiseUser);
              }
            }
                      }
        }
        loadPhoto();
        loadPurchases();
        loadSales();
        announcements();

      }, []);
    return (
        <>
        <PanelUser>
        <Sidebar>
            <p>{name}</p>
            {photo &&
            <img src={`http://localhost:3333/files/user/${photo}`}/>
            }
            <ul>
                <button onClick={() => click(setInfos)}>Informações pessoais<Hove></Hove></button>
                <button onClick={() => click(setCompras)}>Minhas compras<Hove></Hove></button>
                <button onClick={() => click(setVendas)}>Minhas vendas<Hove></Hove></button>
                <button onClick={() => click(setAnuncios)}>Meus anúncios<Hove></Hove></button>
                <button onClick={() => click(setEnderecos)}>Meus endereços<Hove></Hove></button>
                <button onClick={() => click(setFavoritos)}>Meus favoritos<Hove></Hove></button>
            </ul>
        </Sidebar>
            <Content>
                {infos ?
                    <>
                    <Title>Informações pessoais</Title>
                    <PersonalInformation />
                    </>

                 : <div></div>
                }

                {compras ?
                    <>
                    <Title>Minhas compras</Title>
                    <Filter>
                      <Item onClick={() => setStateCompras(0)}
                        style={{background: `${stateCompras === 0 ? "#569CCD" : "#fff"}`,
                        color: `${stateCompras === 0 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Todas as compras
                      </Item>
                      <Item onClick={() => setStateCompras(1)}
                        style={{background: `${stateCompras === 1 ? "#569CCD" : "#fff"}`,
                        color: `${stateCompras === 1 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Em andamento
                      </Item>
                      <Item onClick={() => setStateCompras(2)}
                        style={{background: `${stateCompras === 2 ? "#569CCD" : "#fff"}`,
                        color: `${stateCompras === 2 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Concluídas
                      </Item>
                      <Item onClick={() => setStateCompras(3)}
                        style={{background: `${stateCompras === 3 ? "#569CCD" : "#fff"}`,
                        color: `${stateCompras === 3 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Canceladas
                      </Item>
                    </Filter>
                    {
                      stateCompras === 0 &&
                        Array.isArray(stateAllPurchases) && stateAllPurchases.map(purchase => {
                         return (<ProductPanel comprador={name} key={purchase.idAnnouncement} id={purchase.idAnnouncement} nome={purchase.title} valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={purchase.size} estado={purchase.state} cor={purchase.color} notify="1" valor={purchase.offert ? purchase.offertValue : purchase.initPrice} vendedor={purchase.nameOwner} data="15 Novembro"/>
                        );
                      })
                    }
                    {
                      stateCompras === 1 &&
                        Array.isArray(stateProgressPurchases) && stateProgressPurchases.map(purchase=>{
                          return (<ProductPanel comprador={name} key={purchase.idAnnouncement}  id={purchase.idAnnouncement} nome={purchase.title} valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={purchase.size} estado={purchase.state} cor={purchase.color} notify="1" valor={purchase.offert ? purchase.offertValue : purchase.initPrice} vendedor={purchase.nameOwner} data="15 Novembro"/>
                        );
                      })
                    }
                    {
                      stateCompras === 2 &&
                      Array.isArray(stateCompletedPurchases) && stateCompletedPurchases.map(purchase=>{
                        return (<ProductPanel comprador={name} key={purchase.idAnnouncement}  id={purchase.idAnnouncement} nome={purchase.title} valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={purchase.size} estado={purchase.state} cor={purchase.color} notify="1" valor={purchase.offert ? purchase.offertValue : purchase.initPrice} vendedor={purchase.nameOwner} data="15 Novembro"/>
                        );
                      })}
                    {
                      stateCompras === 3 &&
                      Array.isArray(stateCanceledPurchases) && stateCanceledPurchases.map(purchase=>{
                        return (<ProductPanel comprador={name} key={purchase.idAnnouncement}  id={purchase.idAnnouncement} nome={purchase.title} valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={purchase.size} estado={purchase.state} cor={purchase.color} notify="1" valor={purchase.offert ? purchase.offertValue : purchase.initPrice} vendedor={purchase.nameOwner} data="15 Novembro"/>
                        );
                      })}

                    </>
                 : <div></div>
                }

                {anuncios ?
                    <>
                    <Title>Meus anúncios</Title>
                    <Filter>
                      <Item onClick={() => setStateAnuncios(0)}
                        style={{background: `${stateAnuncios === 0 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 0 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Todas os anúncios
                      </Item>
                      <Item onClick={() => setStateAnuncios(1)}
                        style={{background: `${stateAnuncios === 1 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 1 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Publicados
                      </Item>
                      <Item onClick={() => setStateAnuncios(2)}
                        style={{background: `${stateAnuncios === 2 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 2 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Pausados
                      </Item>
                      <Item onClick={() => setStateAnuncios(3)}
                        style={{background: `${stateAnuncios === 3 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 3 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Vendidos
                      </Item>
                      <Item onClick={() => setStateAnuncios(4)}
                        style={{background: `${stateAnuncios === 4 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 4 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Rascunhos
                      </Item>
                      <Item onClick={() => setStateAnuncios(5)}
                        style={{background: `${stateAnuncios === 5 ? "#569CCD" : "#fff"}`,
                        color: `${stateAnuncios === 5 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Reservados
                      </Item>
                    </Filter>
                    {stateAnuncios === 0 &&
                      Array.isArray(stateAllAnnouncements) && stateAllAnnouncements.map(announcement =>{
                        return( <AnuncioPanel vendido key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                    {stateAnuncios === 1 &&
                      Array.isArray(statePublishedAnnouncements) && statePublishedAnnouncements.map(announcement =>{
                        return( <AnuncioPanel key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                    {stateAnuncios === 2 &&
                       Array.isArray(statePausedAnnouncements) && statePausedAnnouncements.map(announcement =>{
                        return( <AnuncioPanel key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                    {stateAnuncios === 3 &&
                      Array.isArray(stateSoldAnnouncements) && stateSoldAnnouncements.map(announcement =>{
                        return( <AnuncioPanel vendido key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                    {stateAnuncios === 4 &&
                       Array.isArray(stateDraftAnnouncements) && stateDraftAnnouncements.map(announcement =>{
                        return( <AnuncioPanel rascunho key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                     {stateAnuncios === 5 &&
                       Array.isArray(stateReservedAnnouncements) && stateReservedAnnouncements.map(announcement =>{
                        return( <AnuncioPanel reservado key={announcement.idAnnouncement} id={announcement.idAnnouncement} nomeProduto={announcement.title} preco={announcement.offert ? announcement.offertValue : announcement.initPrice}/>
                        );
                      })
                    }
                    </>


                 : <div></div>
                }

                {vendas ?
                    <>
                    <Title>Minhas vendas</Title>
                    <Filter>
                      <Item onClick={() => setStateVendas(0)}
                        style={{background: `${stateVendas === 0 ? "#569CCD" : "#fff"}`,
                        color: `${stateVendas === 0 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Todas as compras
                      </Item>
                      <Item onClick={() => setStateVendas(1)}
                        style={{background: `${stateVendas === 1 ? "#569CCD" : "#fff"}`,
                        color: `${stateVendas === 1 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Em andamento
                      </Item>
                      <Item onClick={() => setStateVendas(2)}
                        style={{background: `${stateVendas === 2 ? "#569CCD" : "#fff"}`,
                        color: `${stateVendas === 2 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Concluídas
                      </Item>
                      <Item onClick={() => setStateVendas(3)}
                        style={{background: `${stateVendas === 3 ? "#569CCD" : "#fff"}`,
                        color: `${stateVendas === 3 ? "#FFFFFF" : "#4E4E4E"}`}}>
                        Canceladas
                      </Item>
                    </Filter>
                    {
                      stateVendas === 0 &&

                        Array.isArray(stateAllSales) && stateAllSales.map(s =>{
                            return(
                              <ProductPanel tipo="venda" key={s.idAnnouncement} id={s.idAnnouncement}  nome={s.title}valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={s.size} estado={s.state} cor={s.color} notify="1" valor={s.offert ? s.valueOffert : s.initPrice} vendedor={name} data="15 Novembro"/>
                            );

                        })
                    }
                     {
                      stateVendas === 1 &&
                      Array.isArray(stateProgressSales) && stateProgressSales.map(s =>{
                          return(
                            <ProductPanel tipo="venda" key={s.idAnnouncement} id={s.idAnnouncement}  nome={s.title}valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={s.size} estado={s.state} cor={s.color} notify="1" valor={s.offert ? s.valueOffert : s.initPrice} vendedor={name} data="15 Novembro"/>

                          );

                      })}
                     {
                      stateVendas === 2 &&
                      Array.isArray(stateCompletedSales) && stateCompletedSales.map(s =>{
                          return(
                            <ProductPanel tipo="venda" key={s.idAnnouncement} id={s.idAnnouncement}  nome={s.title}valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={s.size} estado={s.state} cor={s.color} notify="1" valor={s.offert ? s.valueOffert : s.initPrice} vendedor={name} data="15 Novembro"/>

                          );

                      })}
                     {
                      stateVendas === 3 &&
                      Array.isArray(stateCanceledSales) && stateCanceledSales.map(s =>{
                          return(
                            <ProductPanel tipo="venda" key={s.idAnnouncement} id={s.idAnnouncement}  nome={s.title}valorAdicionado="20" rastreamento="AMASDASDQWEBR" formaPagamento="PicPay" formaEntrega="Sedex" tipoPagamento="PicPay" tamanho={s.size} estado={s.state} cor={s.color} notify="1" valor={s.offert ? s.valueOffert : s.initPrice} vendedor={name} data="15 Novembro"/>

                          );

                      })}

                    </>


                 : <div></div>
                }

                {enderecos ?
                    <>
                    <Title>Meus endereços</Title>
                    <Endereco username="Yan Vancelis" principal="Principal" rua="Rua José de Queiroz Pessoa, 1648" cidade="Quixadá" cep="63900-000"></Endereco>
                    <Endereco username="Micael Lima" principal="" rua="Rua Valdivino Santiago, 221" cidade="Russas" cep="62900-000"></Endereco>
                    </>

                 : <div></div>
                }

                {favoritos ?
                    <>
                    <Title>Meus favoritos</Title>
                    <Favs>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                        <Favorito nome="Camisa Time Old" prcoAntes="40" precoDepois="32"></Favorito>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                        <Favorito nome="Jaqueta NWL" precoAntes="50" precoDepois="40"></Favorito>
                    </Favs>

                    </>

                 : <div></div>
                }

            </Content>
        </PanelUser>
        </>
    )
}
