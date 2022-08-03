/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
// import makeAnimated from 'react-select/animated';
import Select, { components } from 'react-select';

// const animatedComponents = makeAnimated();
/**
 * props.options
 * props.value
 * props.onChange
 */
function DropDownSelect(props) {
  const { options, value, onChange } = props;

  const { Option } = components;
  function CustomSelectOption(props) {
    return (
      <Option {...props}>
        <i className={`ss ss-${props.data.value.toLowerCase()}`} />
        {props.data.value}
      </Option>
    );
  }

  function CustomSelectValue(props) {
    return (
      <div>
        <i className={`ss ss-${props.data.value.toLowerCase()}`} />
        {props.data.value}
      </div>
    );
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
        components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
      />
    </div>
  );
}

export default DropDownSelect;
