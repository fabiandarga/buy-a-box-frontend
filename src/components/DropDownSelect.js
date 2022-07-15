import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const animatedComponents = makeAnimated();
/**
 * props.options
 * props.value
 * props.onChange
 */
function DropDownSelect(props) {
  return (
    <div>
      <Select
        defaultValue={props.value}
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={props.onChange}
        isMulti
        options={props.options}
      />
    </div>
  );
}

export default DropDownSelect;
