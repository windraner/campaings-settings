import React, { Component } from 'react';
import MainButtonSection from './components/main-button-section/main-button-section';
import MainContentSection from './components/main-content-section/main-content-section';
import PropTypes from 'prop-types';

import { MENU_LIST } from './constans';

import './campaings-settings.css';

export default class CampaingsSettings extends Component {
  state = {
    activeTab: MENU_LIST[0],
  }

  activeTabHandler = (value) => {
    this.setState({activeTab: value});
  }

  render() {
    const { onCancel, onSave } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="campaings-settings__container">
        <div className="campaings-settings__wrapper w-100 m-auto">
          <MainContentSection
            activeTab={activeTab}
            activeTabHandler={this.activeTabHandler}
          />

          <MainButtonSection
            onCancel={onCancel}
            onSave={onSave}
          />
        </div>
      </div>
    );
  }
}

CampaingsSettings.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
