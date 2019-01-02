import React from 'react';
import NavMenu from './nav-menu/nav-menu';
import TabBlock from './tab-block/tab-block';
import PropTypes from 'prop-types';

const MainContentSection = (props) => {
  const { name, activeTab, stateHandler } = props;
  const menuAlerts = [
    [name]
  ];

  return (
    <div className="d-flex justify-content-between">
      <NavMenu
        menuAlerts={menuAlerts}
        activeTab={activeTab}
        stateHandler={stateHandler}
      />

      <TabBlock
        {...props}
      />
    </div>
  );
};

MainContentSection.propTypes = {
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

export default MainContentSection;
