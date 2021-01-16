import React from 'react';
import { ContextConsumer } from '../../context/Context';
import HomeCard from './HomeCard';

const Home = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <ContextConsumer>
          {(value) =>
            value.placeInfo.map((item) => <HomeCard key={item.id} {...item} />)
          }
        </ContextConsumer>
      </div>
    </div>
  );
};

export default Home;
