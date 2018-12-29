import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './text-input.css';

const TextInput = (props) => {
  const { title, value, field, stateHandler } = props;
  return (
    <Fragment>
      <label className="campaings-settings__input-title">{title}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => stateHandler(field, e.target.value)}
        onBlur={(e) => stateHandler(field, e.target.value.trim())}
        className="campaings-settings__text-input d-block w-100"
      />
      {/* <div className="campaings-settings__text-input-error d-flex align-items-center mt-2">
        <span className="campaings-settings__text-input-error-icon rounded-circle position-relative mr-2" />
        <span>Can not be empty</span>
      </div> */}
    </Fragment>
  );
};

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default TextInput;
