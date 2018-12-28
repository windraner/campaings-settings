import React from 'react';
import NavMenuItem from './nav-menu-item/nav-menu-item';
import { MENU_LIST } from '../../../constans';
import PropTypes from 'prop-types';

import './nav-menu.css';

const NavMenu = (props) => {
  const { activeTab, activeTabHandler } = props;
  return (
    <ul className="navmenu__list d-flex flex-column">
      {
        MENU_LIST.map((item) => {
          return(
            <NavMenuItem
              key={item}
              name={item}
              activeTab={activeTab}
              activeTabHandler={activeTabHandler}
            />
          );
        })
      }
    </ul>
  );
};

NavMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  activeTabHandler: PropTypes.func.isRequired,
};

export default NavMenu;
