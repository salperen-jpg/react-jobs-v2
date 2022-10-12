import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { toggleSidebar } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import NavLinks from './NavLinks';
const SmallarSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }`}
      >
        <div className='content'>
          <button
            className='close-btn'
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallarSidebar;
