import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './switch.css';

const Switch = (props) => {
  const { isChecked, field, switchHandler } = props;
  return (
    <Fragment>
      <hr className="campaings-settings__border-separator" />
      <div className="d-flex justify-content-between margin-top-30">
        <div className="campaings-settings__input-title">Enable shoppable link editing</div>

        <label className="d-flex m-0">
          <input
            checked={isChecked}
            type="checkbox"
            className="campaings-settings-content__switch-input position-relative m-0"
            onChange={() => switchHandler(field)}
          />
          <span className="campaings-settings-content__switch-text">{isChecked ? 'On' : 'Off'}</span>
        </label>
      </div>
    </Fragment>
  );
};

Switch.propTypes = {
  field: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  switchHandler: PropTypes.func.isRequired
};

export default Switch;
