import React, { Component } from 'react';
import MainButtonSection from './components/main-button-section/main-button-section';
import MainContentSection from './components/main-content-section/main-content-section';
import PropTypes from 'prop-types';

import * as CONSTANT from './constans';

import './campaings-settings.css';

export default class CampaingsSettings extends Component {
  constructor(props) {
    super();
    const { data } = props;
    this.state = {
      [CONSTANT.ACTIVE_TAB]: CONSTANT.MENU_LIST[0],
      [CONSTANT.NAME]: data.name,
      [CONSTANT.DESCRIPTION]: data.description,
      [CONSTANT.PRODUCT_CATALOGUE]: data.productCatalogue,
      [CONSTANT.SHOPPABLE_LINK]: data.shoppableLink,
      [CONSTANT.SHOW_ERROR_ALERT]: true,
    };
  }

  stateHandler = (field, value) => {
    if(field === CONSTANT.NAME && !value) {
      return this.setState({[field]: value, [CONSTANT.SHOW_ERROR_ALERT]: true});
    }

    this.setState({[field]: value});
  }

  switchHandler = (field) => {
    this.setState({[field]: !this.state[field]});
  }

  render() {
    const { onCancel, onSave, productsCatalogueList } = this.props;
    const { showErrorAlert } = this.state;
    // console.log(CONSTANT.ACTIVE_TAB);
    return (
      <div className="campaings-settings__container">
        <div className="campaings-settings__wrapper w-100 m-auto">
          <MainContentSection
            {...this.state}
            productsCatalogueList={productsCatalogueList}
            stateHandler={this.stateHandler}
            switchHandler={this.switchHandler}
          />

          <MainButtonSection
            showErrorAlert={showErrorAlert}
            stateHandler={this.stateHandler}
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
