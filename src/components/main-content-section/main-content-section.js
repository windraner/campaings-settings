import React from 'react';
import NavMenu from './nav-menu/nav-menu';

const MainContentSection = (props) => {
  const { activeTab, activeTabHandler } = props;
  return (
    <div>
      <NavMenu
        activeTab={activeTab}
        activeTabHandler={activeTabHandler}
      />
    </div>
  );
};

export default MainContentSection;
