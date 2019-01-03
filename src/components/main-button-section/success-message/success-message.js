import React from 'react';
import PropTypes from 'prop-types';

import { SHOW_SUCCESS_ALERT } from '../../../constans';

import './success-message.css';

const SuccessMessage = (props) => {
  if(!props.showSuccessAlert) {
    return null;
  }

  return (
    <div className="campaigns-settings__custom-alert campaigns-settings__custom-alert-success d-flex align-items-center justify-content-between">
      <span className="campaigns-settings__custom-alert-icon-success position-relative rounded-circle"></span>
      <span>Success! All changes have been saved.</span>
      <span
        onClick={() => props.stateHandler(SHOW_SUCCESS_ALERT, false)}
        className="campaigns-settings__custom-alert-close"
      />
    </div>
  );
};

SuccessMessage.propTypes = {
  showSuccessAlert: PropTypes.bool,
  stateHandler: PropTypes.func.isRequired,
};

export default SuccessMessage;
