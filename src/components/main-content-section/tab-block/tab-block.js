import React from 'react';
import { MENU_LIST } from '../../../constans';
import PropTypes from 'prop-types';

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

TabBlock.propTypes = {
  accountsSettingsItems: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hashtagBlackList: PropTypes.array.isRequired,
  isMediaCollection: PropTypes.bool.isRequired,
  isPhotosModerationQueue: PropTypes.bool.isRequired,
  isShoppableLink: PropTypes.bool.isRequired,
  mediaCollectionList: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  productCatalogue: PropTypes.string.isRequired,
  productsCatalogueList: PropTypes.array.isRequired,
  stateHandler: PropTypes.func.isRequired,
  switchHandler: PropTypes.func.isRequired,
  userBlackList: PropTypes.array.isRequired,
};

export default TabBlock;
