import React from 'react';
import ButtonCancel from './button-cancel/button-cancel';
import ButtonSave from './button-save/button-save';
import ErrorMessage from './alert-message/error-message';
import SuccessMessage from './success-message/success-message';
import PropTypes from 'prop-types';

import './main-button-section.css';
import './common/alert-message.css';

const MainButtonSection = (props) => {
  const { onCancel, onSave, showErrorAlert, showSuccessAlert, stateHandler } = props;
  return (
    <div className="campaings-settings__main-button-wrapper d-flex justify-content-between">
      <ButtonCancel handlerCallBack={onCancel} />
      <ErrorMessage
        showErrorAlert={showErrorAlert}
        stateHandler={stateHandler}
      />
      <SuccessMessage
        showSuccessAlert={showSuccessAlert}
        stateHandler={stateHandler}
      />
      <ButtonSave handlerCallBack={onSave} />
    </div>
  );
};

MainButtonSection.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default MainButtonSection;
