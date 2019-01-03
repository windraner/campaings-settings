import React from 'react';

import './account-edit-button.css';

const AccountEditButton = () => {
  return (
    <a href="#" className="campaigns-settings__account-edit-button d-flex align-items-end text-center">
      <span className="campaigns-settings__account-edit-button-icon mr-2" />
      Edit accounts
    </a>
  );
};

export default AccountEditButton;
