import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import Greaterthan from '../../assets/icons/chevron-down 1.svg';

function Breadcrumbs(props) {
  return (
    <>
      <Container>
        <h5>
          <Link to="/" className="link">
            home
          </Link>
        </h5>
        <img src={Greaterthan} alt="" />
        <h5>
          <Link to="/" className="link">
            {props.category}
          </Link>
        </h5>
      </Container>
    </>
  );
}
export default Breadcrumbs;
