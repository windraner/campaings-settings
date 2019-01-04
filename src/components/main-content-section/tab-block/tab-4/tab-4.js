import React, { Component, Fragment } from 'react';
import TabTitle from '../common/tab-title/tab-title';
import TabContainer from '../common/tab-container/tab-container';
import Switch from '../common/switch/switch';
import CreatableSelectInput from '../common/creatable-select/creatable-select';
import TextareaInput from '../common/textarea-input/textarea-input';
import PropTypes from 'prop-types';

import { IS_MEDIA_RIGHTS, HASHTAG_RIGHTS_LIST, TERMS_AND_CONDITIONS } from '../../../../constans';

export default class Tab4 extends Component {

  renderMediaRights = () => {
    const { isMediaRights, hashtagRightsList, termsAndConditions, stateHandler } = this.props;
    if(!isMediaRights) {return null;}
    return (
      <Fragment>
        <hr className="campaigns-settings__border-separator" />
        <CreatableSelectInput
          text={'Hashtags for auto-grant rights'}
          tooltipText={'test message'}
          field={HASHTAG_RIGHTS_LIST}
          itemsList={hashtagRightsList}
          stateHandler={stateHandler}
        />
        <div className="campaigns-settings__divider-mt-32" />
        <TextareaInput
          className={'campaigns-settings__min-h-320'}
          title="Terms & Conditions for media rights"
          value={termsAndConditions}
          field={TERMS_AND_CONDITIONS}
          stateHandler={stateHandler}
        />
      </Fragment>
    );
  }

  render() {
    const {
      isMediaRights,
      switchHandler
    } = this.props;

    return (
      <Fragment>
        <TabTitle text="Edit Media rights" />

        <TabContainer>
          <Switch
            text={'Enable media rights framework?'}
            field={IS_MEDIA_RIGHTS}
            isChecked={isMediaRights}
            switchHandler={switchHandler}
          />
          {this.renderMediaRights()}
        </TabContainer>
      </Fragment>
    );
  }
}

Tab4.propTypes = {
  isMediaRights: PropTypes.bool.isRequired,
  hashtagRightsList: PropTypes.array.isRequired,
  termsAndConditions: PropTypes.string.isRequired,
  switchHandler: PropTypes.func.isRequired,
  stateHandler: PropTypes.func.isRequired,
};
