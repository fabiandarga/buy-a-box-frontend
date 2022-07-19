import React from 'react' 
import DateRangePicker from "@wojtekmaj/react-daterange-picker";


function WojtekmajDaterangePicker(props) { 
  
 // setFrom={props.setFrom} setTo={props.setTo}
 // new Date().toISOString().slice(0,10)
 const onChangeDateRangePickerHandler = (event) => {  
    props.setFrom(new Date(event[0]).toISOString().slice(0,10)); 
    props.setTo(new Date(event[1] ).toISOString().slice(0,10)); 
 }

  return (
    <div> 
      <h3>Zeitrahmen</h3> 
      <DateRangePicker  
      onChange={onChangeDateRangePickerHandler}  
      value={[props.to, props.from]} 
      />
    </div>
  )
}

export default WojtekmajDaterangePicker