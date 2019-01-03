import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './switch.css';

const Switch = (props) => {
  const { text, isChecked, field, switchHandler, disabled } = props;
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        {text ? <div className="campaigns-settings__input-title">{text}</div> : null}

        <label className="d-flex m-0">
          <input
            disabled={disabled}
            checked={isChecked}
            type="checkbox"
            className="campaigns-settings__switch-input position-relative m-0"
            onChange={() => switchHandler(field)}
          />
          <span className="campaigns-settings__switch-text">{isChecked ? 'On' : 'Off'}</span>
        </label>
      </div>
    </Fragment>
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  isChecked: PropTypes.bool.isRequired,
  switchHandler: PropTypes.func.isRequired,
};

export default Switch;
