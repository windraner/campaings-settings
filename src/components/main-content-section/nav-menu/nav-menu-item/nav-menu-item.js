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
    const { name, activeTab, stateHandler } = this.props;
    const { isHovered } = this.state;
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
        {/* <span className="campaings-settings__nav-menu-icon" /> */}
      </li>
    );
  }
}

NavMenuItem.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  stateHandler: PropTypes.func.isRequired,
};
