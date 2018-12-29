import React from 'react';

import './tab-container.css';

const TabContainer = (props) => {
  return (
    <div className="campaings-settings__tab-container">
      {props.children}
    </div>
  );
};

export default TabContainer;
