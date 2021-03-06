import React from 'react';
import Switch from '../../switch/switch';
import PropTypes from 'prop-types';

import './accounts-setting-item.css';

const AccountsSettingItem = (props) => {
  const { item, currentSwitchHandler } = props;

  let socIcon;
  switch(item.platform) {
    case 'Instagram':
      socIcon = 'campaigns-settings__accounts-setting-table-item-inst';
      break;
    case 'Twitter':
      socIcon = 'campaigns-settings__accounts-setting-table-item-tw';
      break;
  }

  let status;
  let rejected = false;
  switch(item.status) {
    case 'Verified':
      status = 'campaigns-settings__accounts-setting-table-item-status-verified';
      break;
    case 'Rejected':
      status = 'campaigns-settings__accounts-setting-table-item-status-rejected';
      rejected = true;
      break;
  }

  return (
    <div
      className={`campaigns-settings__accounts-setting-table-item-container ${rejected ? 'campaigns-settings__accounts-setting-table-item-container-disabled' : ''}`}
    >
      <div className="d-flex">
        <img className="campaigns-settings__accounts-setting-table-item-image d-block" src={item.url} alt=""/>
        <div className="ml-3">
          <div className="campaigns-settings__accounts-setting-table-item-name">{item.userName}</div>
          <div className="campaigns-settings__accounts-setting-table-item-soc-name">
            <span className={`campaigns-settings__accounts-setting-table-item-soc-icon ${socIcon} mr-1`} />
            {item.platform}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end">
        <div className={`campaigns-settings__accounts-setting-table-item-status ${status}`}>{item.status}</div>
      </div>
      <div className="d-flex align-items-end">
        <Switch
          disabled={rejected}
          field={{id: item.id, field: 'userFeed'}}
          isChecked={item.userFeed}
          switchHandler={currentSwitchHandler}
        />
      </div>
      <div className="d-flex align-items-end">
        <Switch
          disabled={rejected}
          field={{id: item.id, field: 'taggedFeed'}}
          isChecked={item.taggedFeed}
          switchHandler={currentSwitchHandler}
        />
      </div>
      <div className="d-flex align-items-end">
        <Switch
          disabled={rejected}
          field={{id: item.id, field: 'mentionedFeed'}}
          isChecked={item.mentionedFeed}
          switchHandler={currentSwitchHandler}
        />
      </div>
    </div>
  );
};

AccountsSettingItem.propTypes = {
  item: PropTypes.object.isRequired,
  currentSwitchHandler: PropTypes.func.isRequired,
};

export default AccountsSettingItem;
