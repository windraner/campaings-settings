import React from 'react';
import PropTypes from 'prop-types';

import './button-cancel.css';

const ButtonCancel = (props) => {
  return (
    <div
      onClick={props.handlerCallBack}
      className="catalog-settings__cancel-button"
    >
      Cancel
    </div>
  );
};

ButtonCancel.propTypes = {
  handlerCallBack: PropTypes.func.isRequired
};

export default ButtonCancel;
