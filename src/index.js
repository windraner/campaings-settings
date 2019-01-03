import React from 'react';
import ReactDOM from 'react-dom';
import CampaignsSettings from './campaigns-settings';

import image from './test.png';
import './index.css';

const data = {
  name: 'Summer Sales 10%',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  productCatalogue: '',
  isShoppableLink: false,
  isMediaCollection: true,
  mediaCollectionList: ['qwe', 'rty'],
  isPhotosModerationQueue: false,
  userBlackList: ['asd', 'fgh'],
  hashtagBlackList: ['zxc', 'vbn'],
  termsAndConditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  accountsSettingsItems: [
    {
      id: '1',
      url: image,
      userName : 'Instagram',
      platform: 'Instagram',
      status: 'Verified',
      userFeed: true,
      taggedFeed: true,
      mentionedFeed: false
    },
    {
      id: '2',
      url: image,
      userName : 'Blackmirror',
      platform: 'Twitter',
      status: 'Rejected',
      userFeed: false,
      taggedFeed: false,
      mentionedFeed: false
    }
  ],
  isMediaRights: true,
  hashtagRightsList: ['yui', 'hjk'],
};

const cancelCallback = () => {
  // console.log('cancelCallback');
};

const saveCallback = (/*newData*/) => {
  // console.log('saveCallback', newData);
};

ReactDOM.render(
  <CampaignsSettings
    data={data}
    productsCatalogueList={[
      '',
      'Product catalogue1',
      'Product catalogue2',
      'Product catalogue3',
      'Product catalogue4',
    ]}
    onSave={saveCallback}
    onCancel={cancelCallback}
  />, document.getElementById('root'));
