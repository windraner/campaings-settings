import React from 'react';
import NavMenu from './nav-menu/nav-menu';
import TabBlock from './tab-block/tab-block';
import PropTypes from 'prop-types';

const MainContentSection = (props) => {
  const { activeTab, stateHandler } = props;
  return (
    <div className="d-flex justify-content-between">
      <NavMenu
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
  activeTab: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default MainContentSection;
