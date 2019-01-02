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
      [CONSTANT.ACTIVE_TAB]: CONSTANT.MENU_LIST[1],
      [CONSTANT.NAME]: data.name,
      [CONSTANT.DESCRIPTION]: data.description,
      [CONSTANT.PRODUCT_CATALOGUE]: data.productCatalogue,
      [CONSTANT.IS_SHOPPABLE_LINK]: data.isShoppableLink,
      [CONSTANT.IS_MEDIA_COLLECTION]: data.isMediaCollection,
      [CONSTANT.MEDIA_COLLECTION_LIST]: data.mediaCollectionList,
      [CONSTANT.IS_PHOTO_MODERATION_QUEUE]: data.isPhotosModerationQueue,
      [CONSTANT.USER_BLACK_LIST]: data.userBlackList,
      [CONSTANT.HASHTAG_BLACK_LIST]: data.hashtagBlackList,
      [CONSTANT.ACCOUNTS_SETTINGS_ITEMS]: data.accountsSettingsItems,
      [CONSTANT.SHOW_ERROR_ALERT]: false,
      [CONSTANT.SHOW_SUCCESS_ALERT]: false,
    };
  }

  stateHandler = (field, value) => {
    // alert message handler block start
    if(field === CONSTANT.NAME && !value) {
      return this.setState({[field]: value, [CONSTANT.SHOW_ERROR_ALERT]: true});
    }
    // alert message handler block end

    this.setState({[field]: value});
  }

  switchHandler = (field) => {
    this.setState({[field]: !this.state[field]});
  }

  saveHandler = () => {
    const { onSave } = this.props;
    this.setState({[CONSTANT.SHOW_SUCCESS_ALERT]: true});
    onSave();
  }

  render() {
    const { onCancel, productsCatalogueList } = this.props;
    const { showErrorAlert, showSuccessAlert } = this.state;
    // console.log(this.state);
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
            showSuccessAlert={showSuccessAlert}
            stateHandler={this.stateHandler}
            onCancel={onCancel}
            onSave={this.saveHandler}
          />
        </div>
      </div>
    );
  }
}

CampaingsSettings.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productCatalogue: PropTypes.string.isRequired,
    isShoppableLink: PropTypes.bool.isRequired,
    isMediaCollection: PropTypes.bool.isRequired,
    mediaCollectionList: PropTypes.array.isRequired,
    isPhotosModerationQueue: PropTypes.bool.isRequired,
    userBlackList: PropTypes.array.isRequired,
    hashtagBlackList: PropTypes.array.isRequired,
    accountsSettingsItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      userName : PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      userFeed: PropTypes.bool.isRequired,
      taggedFeed: PropTypes.bool.isRequired,
      mentionedFeed: PropTypes.bool.isRequired,
    })).isRequired,
  }),
  productsCatalogueList: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
