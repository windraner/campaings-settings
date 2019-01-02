import React from 'react';
import Switch from '../../switch/switch';

import './accounts-setting-item.css';

const AccountsSettingItem = (props) => {
  const { item, currentSwitchHandler } = props;

  let socIcon;
  switch(item.platform) {
    case 'Instagram':
      socIcon = 'campaings-settings__accounts-setting-table-item-inst';
      break;
    case 'Twitter':
      socIcon = 'campaings-settings__accounts-setting-table-item-tw';
      break;
  }

  let status;
  let rejected = false;
  switch(item.status) {
    case 'Verified':
      status = 'campaings-settings__accounts-setting-table-item-status-verified';
      break;
    case 'Rejected':
      status = 'campaings-settings__accounts-setting-table-item-status-rejected';
      rejected = true;
      break;
  }

  return (
    <div
      className={`campaings-settings__accounts-setting-table-item-container ${rejected ? 'campaings-settings__accounts-setting-table-item-container-disabled' : ''}`}
    >
      <div className="d-flex">
        <img className="campaings-settings__accounts-setting-table-item-image d-block" src={item.url} alt=""/>
        <div className="ml-3">
          <div className="campaings-settings__accounts-setting-table-item-name">{item.userName}</div>
          <div className="campaings-settings__accounts-setting-table-item-soc-name">
            <span className={`campaings-settings__accounts-setting-table-item-soc-icon ${socIcon} mr-1`} />
            {item.platform}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end">
        <div className={`campaings-settings__accounts-setting-table-item-status ${status}`}>{item.status}</div>
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

export default AccountsSettingItem;
