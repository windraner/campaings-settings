import React from 'react';
import PropTypes from 'prop-types';

import './tab-title.css';

const TabTitle = (props) => {
  return (
    <h2 className="campaigns-settings__tab-title text-center mb-0">
      <strong>{props.text}</strong>
    </h2>
  );
};

TabTitle.propTypes = {
  text: PropTypes.string,
};

export default TabTitle;
