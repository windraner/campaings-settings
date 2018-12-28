import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './nav-menu-item.css';

export default class NavMenuItem extends Component {
  state={
    isHovered: false
  }

  hoverHandler = (value) => {
    this.setState({isHovered: value});
  }

  render() {
    const { name, activeTab, activeTabHandler } = this.props;
    const { isHovered } = this.state;
    let status = 'navmenu__item_default';

    if(isHovered) {
      status = 'navmenu__item_hover';
    }

    if(name === activeTab) {
      status = 'navmenu__item_active';
    }

    return (
      <li
        className={`navmenu__item ${status}`}
        onClick={() => activeTabHandler(name)}
        onMouseEnter={() => this.hoverHandler(true)}
        onMouseLeave={() => this.hoverHandler(false)}
      >
        {name}
      </li>
    );
  }
}

NavMenuItem.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  activeTabHandler: PropTypes.func.isRequired,
};
