import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainButtonSection from './components/main-button-section/main-button-section';
import MainContentSection from './components/main-content-section/main-content-section';

import './campaings-settings.css';

export default class CampaingsSettings extends Component {
  state = {
    activeTab: '',
  }

  activeTabHandler = (value) => {
    this.setState({activeTab: value});
  }

  render() {
    const { onCancel, onSave } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="campaings-settings__wrapper border">
        <MainContentSection
          activeTab={activeTab}
          activeTabHandler={this.activeTabHandler}
        />

        <MainButtonSection
          onCancel={onCancel}
          onSave={onSave}
        />
      </div>
    );
  }
}

CampaingsSettings.propTypes = {

};
