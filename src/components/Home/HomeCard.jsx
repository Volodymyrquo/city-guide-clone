import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ headerTitle, headerSubTitle, headerText, img }) => {
  return (
    <div className='col-sm-6 col-md-4 mx-auto mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={img} alt={headerTitle} className='card-img-top' />
        <div className='card-body'>
          <h3 className='card-title text-uppercase'>{headerTitle}</h3>
          <h5 className='card-title'>{headerSubTitle}</h5>
          <p className='card-text'>{headerText}</p>
          <Link className='btn btn-outline-primary text-uppercase'>
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
