/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Select, { components } from 'react-select';
import { ProductOption, ValueOption } from '../utils/prudoctIcon';

const { Option } = components;

/**
 * props.options
 * props.value
 * props.onChange
 */
function DropDownSelect(props) {
  const { options, value, onChange, variante } = props;

  let CustomSelectOption = function DefaultOption(props) {
    return <Option {...props}>{props.data.value}</Option>;
  };

  let CustomSelectValue = function DefaultValueContainer(props) {
    return props.data.value;
  };

  if (variante === 'product') {
    CustomSelectOption = ProductOption;

    CustomSelectValue = ValueOption;
  }

  return (
    <div>
      <Select
        defaultValue={value}
        closeMenuOnSelect={false}
        // components={animatedComponents}
        onChange={onChange}
        isMulti
        options={options}
        components={{ Option: CustomSelectOption, MultiValueLabel: CustomSelectValue }}
      />
    </div>
  );
}

export default DropDownSelect;
