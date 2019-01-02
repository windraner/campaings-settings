import React from 'react';
import PropTypes from 'prop-types';

import { SHOW_SUCCESS_ALERT } from '../../../constans';

import './success-message.css';

const SuccessMessage = (props) => {
  if(!props.showSuccessAlert) {
    return null;
  }

  return (
    <div className="campaings-settings__custom-alert campaings-settings__custom-alert-success d-flex align-items-center justify-content-between">
      <span className="campaings-settings__custom-alert-icon-success position-relative rounded-circle"></span>
      <span>Success! All changes have been saved.</span>
      <span
        onClick={() => props.stateHandler(SHOW_SUCCESS_ALERT, false)}
        className="campaings-settings__custom-alert-close"
      />
    </div>
  );
};

SuccessMessage.propTypes = {
  showSuccessAlert: PropTypes.bool,
  stateHandler: PropTypes.func.isRequired,
};

export default SuccessMessage;
