/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select, { components } from 'react-select';
import { ProductOption, ValueOption } from '../utils/prudoctIcon';

const { Option } = components;

function DefaultOption(props) {
  const { data } = props;
  return <Option {...props}> {data.value} </Option>;
}

function DefaultValueContainer(props) {
  return props.data.value;
}

/**
 * props.options
 * props.value
 * props.onChange
 */
function DropDownSelect(props) {
  const { options, value, onChange, variant, multi } = props;

  let CustomSelectOption = DefaultOption;
  let CustomSelectValue = DefaultValueContainer;

  if (variant === 'product') {
    CustomSelectOption = ProductOption;

    CustomSelectValue = ValueOption;
  }

  let isMulti = false;

  if (multi === 'multi') {
    isMulti = true;
  }

  return (
    <div>
      <Select
        defaultValue={value}
        closeMenuOnSelect={false}
        onChange={onChange}
        isMulti={isMulti}
        options={options}
        components={{ Option: CustomSelectOption, MultiValueLabel: CustomSelectValue }}
      />
    </div>
  );
}

export default DropDownSelect;
