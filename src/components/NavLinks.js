import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            key={id}
            onClick={() => dispatch(toggleSidebar())}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
