import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Header,
  Row,
  Cover,
  Photo,
  About,
  Name,
  Username,
  Rate,
  Modal,
  Load,
  Nav,
  Button,
  Container,
  Items,
} from './style';
import api from '../../services/api';
import CoverImg from "../../assets/photos/cover.png";
import Spinner from '../../assets/exclamacao.svg';
import Star from '../../assets/icons/Estrela';
import ProductSmall from '../../components/ProductSmall';
import Rated from '../../components/Rate';

function Profile() {
  const { pathId } = useParams();
  const [user, setUser] = useState();
  const [photoUser, setPhotoUser] = useState();

  const [announcements, setAnnouncements] = useState();

  const [isLoad, setIsLoad] = useState(true);
  const [state, setState] = useState(0);


  useEffect(() =>{
    const loadUser = async () =>{
      const { data } = await api.get(`/users/${pathId}`);
      setUser(data[0]);
      const photouser = await api.get(`/photosuser/${pathId}`);
      setPhotoUser(photouser.data[0].filename);
      const products = await api.get(`/announcements/?idOwner=${pathId}`);
      setAnnouncements(products.data.promiseUser);
      setIsLoad(false);

    }
    loadUser();
  },[])

  const colorStar = (contFav) => {
    if (contFav === '0') {
      return (
        <>
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '1') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '2') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '3') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '4') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#949494" />
        </>
      );
    } else if (contFav === '5') {
      return (
        <>
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
          <Star color="#569ccd" />
        </>
      );
    }
  };

  return (
    <>
     {isLoad ?
    <Modal>
      <Load src={Spinner} alt="Loading"/>
    </Modal>
  : <>
    <Header>
      <Cover image={CoverImg}></Cover>
      <Row>
      <Photo>
        <img src={`http://localhost:3333/files/user/${photoUser}`} alt="Foto do usuário do perfil" width={150}/>
      </Photo>
      <About>
        <Name>
          <h2>
            Lojinha de {user.name.split(" ")[0]}
          </h2>
        </Name>
        <Username>
            <p>
              @{user.username}
            </p>
        </Username>
        </About>
        <Rate>
        {colorStar(String(user.rating))}

        </Rate>
        </Row>
    </Header>
    <Nav>
      <Button onClick={() => setState(0)} style={{background: `${state === 0 ? "#569CCD" : "#fff"}`,
        color: `${state === 0 ? "#FFFFFF" : "#4E4E4E"}`}}>
       À venda
      </Button>
      <Button onClick={() => setState(1)} style={{background: `${state === 1 ? "#569CCD" : "#fff"}`,
        color: `${state === 1 ? "#FFFFFF" : "#4E4E4E"}`}}>
        Vendidos
      </Button>
      <Button onClick={() => setState(2)} style={{background: `${state === 2 ? "#569CCD" : "#fff"}`,
        color: `${state === 2 ? "#FFFFFF" : "#4E4E4E"}`}}>
        Avaliações
      </Button>
    </Nav>

    {state === 0 &&

      <Container>
        <Items>
        {announcements && announcements.map(announcement =>{
          if(announcement.idStatus !== "a7249f2f-da3c-4312-8269-4d20aa326dcc"){
            return;
          }
          return(
          <ProductSmall key={announcement.idAnnouncement}
            id={announcement.idAnnouncement}
            title={announcement.title}
            price={announcement.initPrice}
            promo={
              announcement.offert ? announcement.valueOffert : ''
            }
            width={"23.33%"}
            size={"500px"}
          />
          );
      })}

      </Items>
      </Container>
    }

    {state === 1 &&

    <Container>
      <Items>
      {announcements && announcements.map(announcement =>{
        if(announcement.idStatus !== "9008a1d4-59af-4fa2-9595-e868c6c0e4bb"){
          return;
        }
        return(
          <ProductSmall key={announcement.idAnnouncement}
            id={announcement.idAnnouncement}
            title={announcement.title}
            price={announcement.initPrice}
            promo={
              announcement.offert ? announcement.valueOffert : ''
            }
            width={"23.33%"}
            size={"500px"}
            notLink={true}
          />
        );
    })}

    </Items>
    </Container>}

    {state === 2 &&

    <Container>
      <Rated/>
    </Container>
    }
    </>}
    </>
  );
}
export default Profile;
