import React from 'react' 
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

const animatedComponents = makeAnimated();

function DropDownSelect(props) { 

  return (
    <div>
    <Select   
    closeMenuOnSelect={false}
    components={animatedComponents}
    //defaultValue={[props.productFilter[4], props.productFilter[5]]}
    isMulti
    options={props.options}  
    />
    </div>
  )
}

export default DropDownSelect