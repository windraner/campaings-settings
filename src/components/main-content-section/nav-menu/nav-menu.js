import React, { Component } from 'react';
import NavMenuItem from './nav-menu-item/nav-menu-item';

import './nav-menu.css';

export default class NavMenu extends Component {

  renderItems = () => {
    const { activeTab, activeTabHandler } = this.props;

    const menuList = [
      'Campaign details',
      'Media Collections',
      'Blacklists',
      'Media rights'
    ];

    return menuList.map(item => {
      return(
        <NavMenuItem
          key={item}
          name={item}
          activeTab={activeTab}
          activeTabHandler={activeTabHandler}
        />
      );
    });
  }

  render() {
    return (
      <ul className="navmenu__list d-flex flex-column">
        {this.renderItems()}
      </ul>
    );
  }
}
