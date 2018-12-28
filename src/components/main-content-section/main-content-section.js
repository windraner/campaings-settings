import React from 'react';
import NavMenu from './nav-menu/nav-menu';
import TabBlock from './tab-block/tab-block';
import PropTypes from 'prop-types';

const MainContentSection = (props) => {
  const { activeTab, activeTabHandler } = props;
  return (
    <div className="d-flex justify-content-between">
      <NavMenu
        activeTab={activeTab}
        activeTabHandler={activeTabHandler}
      />

      <TabBlock
        activeTab={activeTab}
      />
    </div>
  );
};

MainContentSection.propTypes = {
  activeTab: PropTypes.string.isRequired,
  activeTabHandler: PropTypes.func.isRequired,
};

export default MainContentSection;
