import React from 'react';
import PropTypes from 'prop-types';

import { SHOW_ERROR_ALERT } from '../../../constans';

import './alert-message.css';

const AlertMessage = (props) => {
  if(!props.showErrorAlert) {
    return null;
  }

  return (
    <div className="campaings-settings__custom-alert d-flex align-items-center justify-content-between">
      <span className="campaings-settings__custom-alert-icon"></span>
      <span>Error. Please fill out all required fields!</span>
      <span
        onClick={() => props.stateHandler(SHOW_ERROR_ALERT, false)}
        className="campaings-settings__custom-alert-close"
      />
    </div>
  );
};

AlertMessage.propTypes = {
  showErrorAlert: PropTypes.bool,
};

export default AlertMessage;
