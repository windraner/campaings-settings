import React, { Component } from 'react';
import TooltipIcon from '../tooltip-icon/tooltip-icon';
import AccountsSettingItem from './accounts-setting-item/accounts-setting-item';

import { ACCOUNTS_SETTINGS_ITEMS } from '../../../../../constans';

import './accounts-setting-table.css';

export default class AccountsSettingTable extends Component {

  renderTableItems = () => {
    const { accountsSettingsItems } = this.props;

    return accountsSettingsItems.map((item) => {
      return (
        <AccountsSettingItem
          key={item.id}
          item={item}
          currentSwitchHandler={this.currentSwitchHandler}
        />
      );
    });
  }

  currentSwitchHandler = (data) => {
    const { accountsSettingsItems, stateHandler } = this.props;
    const newAccountsSettingsItems = accountsSettingsItems.map((item) => {
      if(item.id === data.id) {
        const newItem = {...item};
        newItem[data.field] = !newItem[data.field];
        return newItem;
      } else {
        return item;
      }
    });

    stateHandler(ACCOUNTS_SETTINGS_ITEMS, newAccountsSettingsItems);
  }

  render() {
    return (
      <div className="campaings-settings__accounts-setting-table-container">
        <div className="campaings-settings__accounts-setting-table-header-container d-grid">
          <div>Username / Platform</div>
          <div>Status</div>
          <div>
            <span className="position-relative">
              User feed
              <TooltipIcon text="1111" />
            </span>
          </div>
          <div>
            <span className="position-relative">
              Tagged feed
              <TooltipIcon text="2222" />
            </span>
          </div>
          <div>
            <span className="position-relative">
              Mentioned feed
              <TooltipIcon text="3333" />
            </span>
          </div>
        </div>

        {this.renderTableItems()}
      </div>
    );
  }
}
