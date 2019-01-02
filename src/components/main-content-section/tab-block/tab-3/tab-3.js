import React, { Fragment } from 'react';
import TabTitle from '../common/tab-title/tab-title';
import TabContainer from '../common/tab-container/tab-container';
import CreatableSelectInput from '../common/creatable-select/creatable-select';

import { USER_BLACK_LIST, HASHTAG_BLACK_LIST } from '../../../../constans';

const Tab3 = (props) => {
  const { userBlackList, hashtagBlackList, stateHandler } = props;

  return (
    <Fragment>
      <TabTitle text="Blacklisting" />

      <TabContainer>
        <CreatableSelectInput
          text={'Do not collect media of these users (max. 3, comma-separated)'}
          field={USER_BLACK_LIST}
          itemsList={userBlackList}
          stateHandler={stateHandler}
        />
        <div className="campaings-settings__divider-mt-32" />
        <CreatableSelectInput
          text={'Do not include media with hashtag (max. 3, comma-separated)'}
          field={HASHTAG_BLACK_LIST}
          itemsList={hashtagBlackList}
          stateHandler={stateHandler}
        />
      </TabContainer>
    </Fragment>
  );
};

export default Tab3;
