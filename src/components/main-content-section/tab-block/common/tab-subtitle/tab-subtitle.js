import React from 'react';
import PropTypes from 'prop-types';

import './tab-subtitle.css';

const TabSubtitle = (props) => {
  return (
    <h2 className="campaigns-settings__tab-subtitle text-center mb-0">
      {props.text}
    </h2>
  );
};

TabSubtitle.propTypes = {
  text: PropTypes.string,
};

export default TabSubtitle;
