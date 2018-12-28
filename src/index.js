import React from 'react';
import ReactDOM from 'react-dom';
import CampaingsSettings from './campaings-settings';

import './index.css';

const cancelCallback = () => {
  // console.log('cancelCallback');
};

const saveCallback = (newData) => {
  console.log('saveCallback', newData);
};

ReactDOM.render(
  <CampaingsSettings
    onSave={saveCallback}
    onCancel={cancelCallback}
  />, document.getElementById('root'));
