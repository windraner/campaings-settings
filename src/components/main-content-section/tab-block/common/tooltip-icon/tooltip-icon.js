import React from 'react';
import PropTypes from 'prop-types';

import './tooltip-icon.css';

const TooltipIcon = (props) => {
  return (
    <span className="campaigns-settings__tooltip-icon my-auto d-flex justify-content-center">
      <span className="campaigns-settings__tooltip position-absolute">{props.text}</span>
    </span>
  );
};

TooltipIcon.propTypes = {
  text: PropTypes.string,
};

export default TooltipIcon;
