import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './dropdown.css';

export default class Dropdown extends Component {
  renderOptions = () => {
    const { productsCatalogueList } = this.props;

    return productsCatalogueList.map((item, i) => {
      return (
        <option key={i} className="campaings-settings__select-option">
          {item}
        </option>
      );
    });
  }

  render() {
    const { title, value, field, stateHandler } = this.props;
    return (
      <Fragment>
        <label className="campaings-settings__input-title">{title}</label>

        <div className="campaings-settings__select-container position-relative">
          <select
            value={value}
            onChange={(e) => stateHandler(field, e.target.value)}
            className="campaings-settings__select w-100"
          >
            {this.renderOptions()}
          </select>
          <span className="campaings-settings__dropdown-icon"></span>
        </div>

        <div className="campaings-settings__dropdown-hint mt-2 position-relative">
          <span className="campaings-settings__dropdown-hint-icon"></span>
          Be careful! Changing catalog will result in <strong>all existing product associations to be lost.</strong>
        </div>
      </Fragment>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  stateHandler: PropTypes.func.isRequired,
};
