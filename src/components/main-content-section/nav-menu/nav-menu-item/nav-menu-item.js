import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTIVE_TAB } from '../../../../constans';

import './nav-menu-item.css';

export default class NavMenuItem extends Component {
  state={
    isHovered: false
  }

  hoverHandler = (value) => {
    this.setState({isHovered: value});
  }

  render() {
    const { name, menuAlerts, activeTab, stateHandler } = this.props;
    const { isHovered } = this.state;

    let allert = false;
    if(menuAlerts) {

      menuAlerts.find((item) => {
        if(!item) {allert = true;}
      });
    }
    let status = 'campaings-settings__nav-menu-item_default';

    if(isHovered) {
      status = 'campaings-settings__nav-menu-item_hover';
    }

    if(name === activeTab) {
      status = 'campaings-settings__nav-menu-item_active';
    }

    return (
      <li
        className={`campaings-settings__nav-menu-item position-relative ${status}`}
        onClick={() => stateHandler(ACTIVE_TAB, name)}
        onMouseEnter={() => this.hoverHandler(true)}
        onMouseLeave={() => this.hoverHandler(false)}
      >
        <span>{name}</span>
        {allert ? <span className="campaings-settings__nav-menu-icon" /> : null}
      </li>
    );
  }
}

NavMenuItem.propTypes = {
  name: PropTypes.string,
  menuAlerts: PropTypes.array,
  activeTab: PropTypes.string,
  stateHandler: PropTypes.func.isRequired,
};
