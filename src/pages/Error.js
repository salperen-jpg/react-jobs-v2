import React from 'react';
import notFound from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={notFound} alt='' />
        <h3>Page does not exist</h3>
        <Link to='/dashboard'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
