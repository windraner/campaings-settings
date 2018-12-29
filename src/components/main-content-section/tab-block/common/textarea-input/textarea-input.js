import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './textarea-input.css';

const TextareaInput = (props) => {
  const { title, value, field, stateHandler } = props;
  return (
    <Fragment>
      <label className="campaings-settings__input-title">{title}</label>
      <textarea
        type="text"
        value={value}
        onChange={(e) => stateHandler(field, e.target.value)}
        onBlur={(e) => stateHandler(field, e.target.value.trim())}
        className="campaings-settings__textarea-input d-block w-100"
      />
    </Fragment>
  );
};

TextareaInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default TextareaInput;
