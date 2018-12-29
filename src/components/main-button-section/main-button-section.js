import React from 'react';
import ButtonCancel from './button-cancel/button-cancel';
import ButtonSave from './button-save/button-save';
import AlertMessage from './alert-message/alert-message';
import PropTypes from 'prop-types';

import './main-button-section.css';

const MainButtonSection = (props) => {
  const { onCancel, onSave, showErrorAlert, stateHandler } = props;
  return (
    <div className="campaings-settings__main-button-wrapper d-flex justify-content-between">
      <ButtonCancel handlerCallBack={onCancel} />
      <AlertMessage
        showErrorAlert={showErrorAlert}
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
