import React from 'react';
import { MENU_LIST } from '../../../constans';

import './tab-block.css';

const TabBlock = (props) => {
  let currnetTabIndex = 1;

  MENU_LIST.forEach((item, i) => {
    if(item === props.activeTab) {
      currnetTabIndex = ++i;
    }
  });

  const Component = require(`./tab-${currnetTabIndex}/tab-${currnetTabIndex}`).default;

  return (
    <div className="campaings-settings__tab-block-container">
      <div className="campaings-settings__tab-block-wrapper">
        <Component {...props} />
      </div>
    </div>
  );
};

export default TabBlock;
