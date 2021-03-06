import React, { Component, Fragment } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import TooltipIcon from '../tooltip-icon/tooltip-icon';
import {
  IndicatorsContainer,
  Control,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove
} from './common-components/common-components';
import PropTypes from 'prop-types';

import { createSelectOptions, splitMultiOptionLimit, optionLimit } from '../../../../../utils';

export default class CreatableSelectInput extends Component {
  state = {
    inputValue: ''
  }

  handleChange = (value) => {
    const { field, limit, stateHandler } = this.props;
    const newList = value.map((item) => {
      return item.value;
    });
    stateHandler(field, optionLimit(newList, limit));
  }

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  }

  handleKeyDown = (event) => {
    const { field, limit, itemsList, stateHandler } = this.props;
    const { inputValue } = this.state;
    if (!inputValue) {return;}
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.setState({ inputValue: '' });
        stateHandler(field, optionLimit([...itemsList, ...splitMultiOptionLimit(inputValue)], limit));
        event.preventDefault();
    }
  }

  blurHandler = (event) => {
    const { field, limit, itemsList, stateHandler } = this.props;
    const { inputValue } = this.state;
    if (!inputValue) {return;}
    this.setState({ inputValue: '' });
    stateHandler(field, optionLimit([...itemsList, ...splitMultiOptionLimit(inputValue)], limit));
    event.preventDefault();
  }

  render() {
    const { itemsList, text, tooltipText } = this.props;
    const { inputValue } = this.state;
    return (
      <Fragment>
        <div className="campaigns-settings__input-title mb-1">{text}</div>

        <div className="position-relative">
          <CreatableSelect
            styles={{
              menu: (base) => ({ ...base, margin: 0}),
              menuList: (base) => ({ ...base, fontSize: '1rem', fontWeight: 600 }),
              valueContainer: (base) => ({ ...base, paddingLeft: 0, height: '100%' }),
              input: (base) => ({ ...base, fontSize: '1rem' }),
            }}
            components={{
              Control,
              IndicatorsContainer,
              MultiValueContainer,
              MultiValueLabel,
              MultiValueRemove,
            }}
            inputValue={inputValue}
            isClearable={true}
            isMulti={true}
            menuIsOpen={false}
            onBlur={this.blurHandler}
            onChange={this.handleChange}
            onInputChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            placeholder={''}
            value={createSelectOptions(itemsList)}
          />

          {tooltipText ? <TooltipIcon text={tooltipText} /> : null}
        </div>
      </Fragment>
    );
  }
}

CreatableSelectInput.propTypes = {
  limit: PropTypes.number,
  text: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  tooltipText: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  stateHandler: PropTypes.func.isRequired,
};
