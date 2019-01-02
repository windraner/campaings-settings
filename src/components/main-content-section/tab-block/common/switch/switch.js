import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './switch.css';

const Switch = (props) => {
  const { text, isChecked, field, switchHandler, disabled } = props;
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        {text ? <div className="campaings-settings__input-title">{text}</div> : null}

        <label className="d-flex m-0">
          <input
            disabled={disabled}
            checked={isChecked}
            type="checkbox"
            className="campaings-settings__switch-input position-relative m-0"
            onChange={() => switchHandler(field)}
          />
          <span className="campaings-settings__switch-text">{isChecked ? 'On' : 'Off'}</span>
        </label>
      </div>
    </Fragment>
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  // field: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  switchHandler: PropTypes.func.isRequired
};

export default Switch;
