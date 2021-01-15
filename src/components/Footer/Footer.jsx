import React from 'react';
import { FooterContainer } from './FooterContainer';
import { liWithoutA, columns } from './footerMethods';

const Footer = () => {
  return (
    <FooterContainer>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-md-3'>
            <h4>Lorem ipsum</h4>
            <ul className='list-unstyled'>{liWithoutA()}</ul>
          </div>
          {columns()}
        </div>
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            &copy; {new Date().getFullYear()} City Guide App - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
