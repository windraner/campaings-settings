import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './text-input.css';

const TextInput = (props) => {
  const { title, value, field, stateHandler, required } = props;
  return (
    <Fragment>
      <label className="campaigns-settings__input-title">{title}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => stateHandler(field, e.target.value)}
        onBlur={(e) => stateHandler(field, e.target.value.trim())}
        className={`campaigns-settings__text-input ${!value && required ? 'campaigns-settings__text-input-error' : ''} d-block w-100`}
      />
      {
        !value && required ?
          <div className="campaigns-settings__hint-input-error d-flex align-items-center mt-2">
            <span className="campaigns-settings__hint-input-error-icon rounded-circle position-relative mr-2" />
            <span>Can not be empty</span>
          </div>
          :
          null
      }
    </Fragment>
  );
};

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default TextInput;
