import React from 'react';
import NavMenuItem from './nav-menu-item/nav-menu-item';
import { MENU_LIST } from '../../../constans';
import PropTypes from 'prop-types';

import './nav-menu.css';

const NavMenu = (props) => {
  const { menuAlerts, activeTab, stateHandler } = props;
  return (
    <ul className="campaigns-settings__nav-menu-list m-0 d-flex flex-column">
      {
        MENU_LIST.map((item, i) => {
          return(
            <NavMenuItem
              key={item}
              name={item}
              menuAlerts={menuAlerts[i]}
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
  menuAlerts: PropTypes.array,
  activeTab: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default NavMenu;
