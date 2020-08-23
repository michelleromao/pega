import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Greaterthan from '../../assets/icons/chevron-down 1.svg';

function Breadcrumbs(props) {
  return (
    <>
      <div className="breadcrumbsContainer">
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
      </div>
    </>
  );
}
export default Breadcrumbs;
