import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  ContentPhoto,
  Button,
  Content,
  ContentTitle,
  Title,
  AddMore,
  ButtonAction,
  Quantity,
  ContentDetails,
  Detail,
  DetailUnique,
  ContentPrice,
  Promo,
  Price,
  ButtonDelete,
} from './style';
import Image from '../../../assets/photos/productsmall3.png';
import Remove from '../../../assets/icons/remove.svg';
import api from '../../../services/api';
import { removeProductToBag } from '../../../store/modules/bag/action';
import { useHistory } from 'react-router-dom';

function Item(props) {
  const dispatch = useDispatch();
  const bagAnnouncements = useSelector((bag) => bag.bag.announcements);

  const history = useHistory();
  const [color, setColor] = useState('#878787');
  const [background, setBackground] = useState('#fff');
  const [border, setBorder] = useState('1px solid #878787');
  const [provar, setProvar] = useState();
  const [stage, setStage] = useState(props.stage);
  const [filename, setFilename] = useState();

  useEffect(() => {
    async function loadPhoto() {
      const photoName = await api.get(`/photosannouncement/${props.id}`);
      setFilename(photoName.data[0].originalname[0]);
    }
    loadPhoto();
  }, []);

  function handleReserve() {
    setColor('#fff');
    setBackground('#569CCD');
    setBorder('none');
    setProvar(true);

    if (color === '#fff') {
      setColor('#878787');
      setBackground('#fff');
      setBorder('1px solid #878787');
      setProvar(false);
    }
  }
  const handleRemoveItemInBag = () => {
    dispatch(removeProductToBag(props.id));
    localStorage.setItem('sacola', true);
    history.push('/redirect');
  };

  return (
    <>
      <Container>
        <ContentPhoto>
          <img
            src={`http://localhost:3333/files/announcement/${filename}`}
            alt="Produto"
          />
          {/*{stage ? (
            <></>
          ) : (
            <Button
              color={color}
              border={border}
              background={background}
              onClick={handleReserve}
            >
              {provar ? <>reservando</> : <>quero provar</>}
            </Button>
          )}
          {stage ? <></> : <></>}
          {stage ? <></> : <></>}*/}
        </ContentPhoto>
        <Content>
          <ContentTitle>
            <Title>{props.title}</Title>
            {stage ? (
              <></>
            ) : (
              <ButtonDelete onClick={() => handleRemoveItemInBag()}>
                <img src={Remove} alt="" />
              </ButtonDelete>
            )}
          </ContentTitle>
          <ContentDetails>
            <Detail>{props.state}</Detail>
            <Detail>{props.size}</Detail>
            <Detail>{props.color}</Detail>
            <DetailUnique>Peça única</DetailUnique>
          </ContentDetails>

          <ContentPrice>
            {props.promo !== ' ' ? (
              <>
                <Promo> {`R$ ${props.price}`}</Promo>
                <Price> {`R$ ${props.promo}`}</Price>
              </>
            ) : (
              <Price>{`R$ ${props.price}`}</Price>
            )}
          </ContentPrice>
        </Content>
      </Container>
    </>
  );
}
export default Item;
