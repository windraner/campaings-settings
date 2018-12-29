import React, { Component, Fragment } from 'react';
import TabTitle from '../common/tab-title/tab-title';
import TabContainer from '../common/tab-container/tab-container';
import TextInput from '../common/text-input/text-input';
import TextareaInput from '../common/textarea-input/textarea-input';
import Dropdown from '../common/dropdown/dropdown';
import Switch from '../common/switch/switch';

import { NAME, DESCRIPTION, PRODUCT_CATALOGUE, SHOPPABLE_LINK } from '../../../../constans';

export default class Tab1 extends Component {
  render() {
    const {
      name,
      description,
      productCatalogue,
      productsCatalogueList,
      shoppableLink,
      stateHandler,
      switchHandler
    } = this.props;

    return (
      <Fragment>
        <TabTitle text="Campaign details" />

        <TabContainer>
          <TextInput
            title="Name"
            value={name}
            field={NAME}
            stateHandler={stateHandler}
          />
          <div className="campaings-settings__divider-mt-32" />
          <TextareaInput
            title="Description"
            value={description}
            field={DESCRIPTION}
            stateHandler={stateHandler}
          />
          <div className="campaings-settings__divider-mt-32" />
          <Dropdown
            title="Link campaign to a product catalogue?"
            productsCatalogueList={productsCatalogueList}
            value={productCatalogue}
            field={PRODUCT_CATALOGUE}
            stateHandler={stateHandler}
          />
          <Switch
            field={SHOPPABLE_LINK}
            isChecked={shoppableLink}
            switchHandler={switchHandler}
          />
        </TabContainer>
      </Fragment>
    );
  }
}
