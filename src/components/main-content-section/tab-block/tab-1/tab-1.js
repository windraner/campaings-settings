import React, { Fragment } from 'react';
import TabTitle from '../common/tab-title/tab-title';
import TabContainer from '../common/tab-container/tab-container';
import TextInput from '../common/text-input/text-input';
import TextareaInput from '../common/textarea-input/textarea-input';
import Dropdown from '../common/dropdown/dropdown';
import Switch from '../common/switch/switch';
import PropTypes from 'prop-types';

import { NAME, DESCRIPTION, PRODUCT_CATALOGUE, IS_SHOPPABLE_LINK } from '../../../../constans';

const Tab1 = (props) => {
  const {
    name,
    description,
    productCatalogue,
    productsCatalogueList,
    isShoppableLink,
    stateHandler,
    switchHandler
  } = props;

  return (
    <Fragment>
      <TabTitle text="Campaign details" />

      <TabContainer>
        <TextInput
          title="Name"
          value={name}
          field={NAME}
          required={true}
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
        <hr className="campaings-settings__border-separator" />
        <Switch
          text={'Enable shoppable link editing'}
          field={IS_SHOPPABLE_LINK}
          isChecked={isShoppableLink}
          switchHandler={switchHandler}
        />
      </TabContainer>
    </Fragment>
  );
};

Tab1.propTypes = {
  description: PropTypes.string.isRequired,
  isShoppableLink: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  productCatalogue: PropTypes.string.isRequired,
  productsCatalogueList: PropTypes.array.isRequired,
  stateHandler: PropTypes.func.isRequired,
  switchHandler: PropTypes.func.isRequired,
};

export default Tab1;
