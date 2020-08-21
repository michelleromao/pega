import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Breadcrumbs(props) {
  return (
    <>
      <div className="breadcrumbsContainer">
        <h5>
          <Link to="/" className="link">
            home
          </Link>
        </h5>
        <span>&gt;</span>
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
