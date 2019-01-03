import React from 'react';
import PropTypes from 'prop-types';

import { SHOW_ERROR_ALERT } from '../../../constans';

import './error-message.css';

const ErrorMessage = (props) => {
  if(!props.showErrorAlert) {
    return null;
  }

  return (
    <div className="campaigns-settings__custom-alert campaigns-settings__custom-alert-error d-flex align-items-center justify-content-between">
      <span className="campaigns-settings__custom-alert-icon-error"></span>
      <span>Error. Please fill out all required fields!</span>
      <span
        onClick={() => props.stateHandler(SHOW_ERROR_ALERT, false)}
        className="campaigns-settings__custom-alert-close"
      />
    </div>
  );
};

ErrorMessage.propTypes = {
  showErrorAlert: PropTypes.bool,
  stateHandler: PropTypes.func.isRequired,
};

export default ErrorMessage;
