import React from 'react';
import NavMenuItem from './nav-menu-item/nav-menu-item';
import { MENU_LIST } from '../../../constans';
import PropTypes from 'prop-types';

import './nav-menu.css';

const NavMenu = (props) => {
  const { activeTab, stateHandler } = props;
  return (
    <ul className="campaings-settings__nav-menu-list m-0 d-flex flex-column">
      {
        MENU_LIST.map((item) => {
          return(
            <NavMenuItem
              key={item}
              name={item}
              activeTab={activeTab}
              stateHandler={stateHandler}
            />
          );
        })
      }
    </ul>
  );
};

NavMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default NavMenu;
