import React from 'react';

import './account-edit-button.css';

const AccountEditButton = () => {
  return (
    <a href="#" className="campaings-settings__account-edit-button d-flex align-items-end text-center">
      <span className="campaings-settings__account-edit-button-icon mr-2" />
      Edit accounts
    </a>
  );
};

export default AccountEditButton;
