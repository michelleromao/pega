import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './style';

function BestSeller(props) {
  const [photoUser, setPhotoUser] = useState();
  useEffect(() => {
    async function loadPhoto() {
      const photo = await api.get(`/photosuser/${props.id}`);
      setPhotoUser(photo.data[0].filename);
    }
    loadPhoto();
  }, []);
  return (
    <Link to={`/profile/${props.id}`}>
    <Container>
      <img
        src={`http://localhost:3333/files/user/${photoUser}`}
        alt={`${props.nameSeller} é vendedor top!`}
        width={200}
        height={200}
      />
      <p>{props.nameSeller}</p>
    </Container>
    </Link>
  );
}
export default BestSeller;
