import React from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const animatedComponents = makeAnimated();
/**
 * props.options
 * props.value
 * props.onChange
 */
function DropDownSelect(props) {
  const { options, value, onChange } = props;
  return (
    <div>
      <Select
        defaultValue={value}
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={onChange}
        isMulti
        options={options}
      />
    </div>
  );
}

export default DropDownSelect;
