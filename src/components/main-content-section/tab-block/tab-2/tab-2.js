import React, { Component, Fragment } from 'react';
import TabTitle from '../common/tab-title/tab-title';
import TabSubtitle from '../common/tab-subtitle/tab-subtitle';
import TabContainer from '../common/tab-container/tab-container';
import Switch from '../common/switch/switch';
import CreatableSelectInput from '../common/creatable-select/creatable-select';
import AccountEditButton from '../common/account-edit-button/account-edit-button';
import AccountsSettingTable from '../common/accounts-setting-table/accounts-setting-table';
import PropTypes from 'prop-types';

import { IS_MEDIA_COLLECTION, MEDIA_COLLECTION_LIST, IS_PHOTO_MODERATION_QUEUE } from '../../../../constans';

export default class Tab2 extends Component {

  renderMediaCollections = () => {
    const { isMediaCollection, mediaCollectionList, isPhotosModerationQueue, switchHandler, stateHandler } = this.props;
    if(!isMediaCollection) {return null;}
    return (
      <Fragment>
        <hr className="campaigns-settings__border-separator" />
        <CreatableSelectInput
          text={'Collect media with hashtags (max. 3, comma-separated)'}
          tooltipText={'test message'}
          limit={3}
          field={MEDIA_COLLECTION_LIST}
          itemsList={mediaCollectionList}
          stateHandler={stateHandler}
        />
        <div className="campaigns-settings__divider-mt-32" />
        <Switch
          text={'Hold incoming photos moderation queue?'}
          field={IS_PHOTO_MODERATION_QUEUE}
          isChecked={isPhotosModerationQueue}
          switchHandler={switchHandler}
        />
      </Fragment>
    );
  }

  render() {
    const {
      accountsSettingsItems,
      isMediaCollection,
      stateHandler,
      switchHandler,
    } = this.props;

    return (
      <Fragment>
        <TabTitle text="Media collection" />
        <div className="campaigns-settings__divider-mt-20" />
        <TabSubtitle text="Global settings" />

        <TabContainer>
          <Switch
            text={'Enable media collection?'}
            field={IS_MEDIA_COLLECTION}
            isChecked={isMediaCollection}
            switchHandler={switchHandler}
          />
          {this.renderMediaCollections()}
        </TabContainer>

        <div className="campaigns-settings__divider-mt-20 campaigns-settings__divider-mb-20 position-relative">
          <TabSubtitle text="Accounts settings" />
          <AccountEditButton />
        </div>

        <AccountsSettingTable
          accountsSettingsItems={accountsSettingsItems}
          stateHandler={stateHandler}
        />
      </Fragment>
    );
  }
}

Tab2.propTypes = {
  accountsSettingsItems: PropTypes.array.isRequired,
  isMediaCollection: PropTypes.bool.isRequired,
  isPhotosModerationQueue: PropTypes.bool.isRequired,
  mediaCollectionList: PropTypes.array.isRequired,
  stateHandler: PropTypes.func.isRequired,
  switchHandler: PropTypes.func.isRequired,
};
