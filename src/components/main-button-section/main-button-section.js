import React from 'react';
import ButtonCancel from './button-cancel/button-cancel';
import ButtonSave from './button-save/button-save';

import './main-button-section.css';

const MainButtonSection = (props) => {
  const { onCancel, onSave } = props;
  return (
    <div className="campaings-settings__main-button-wrapper d-flex justify-content-between">
      <ButtonCancel handlerCallBack={onCancel} />
      <ButtonSave handlerCallBack={onSave} />
    </div>
  );
};

export default MainButtonSection;
