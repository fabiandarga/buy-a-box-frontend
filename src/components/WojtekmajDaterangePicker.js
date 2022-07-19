import React from 'react' 
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

function formatDate(date) {
 
  let result = '' + date.getFullYear() 
  const month = date.getMonth()+1 
  const day = date.getDate() 
  result += '-'+("0" + month).slice(-2)
  result += '-'+("0" + day).slice(-2)
  return result
} 

console.log(formatDate(new Date())); 

function WojtekmajDaterangePicker(props) { 
  
 // setFrom={props.setFrom} setTo={props.setTo}
 // new Date().toISOString().slice(0,10)
 const onChangeDateRangePickerHandler = (event) => {  
    props.setFrom(formatDate(new Date(event[0]))); 
    props.setTo(formatDate(new Date(event[1]))); 
 }
 const valueDate = [new Date(props.from), new Date(props.to)] 
 console.log('valueDate',valueDate);
  return (
    <div> 
      <h3>Zeitrahmen</h3> 
      <DateRangePicker  
      onChange={onChangeDateRangePickerHandler}  
      value={valueDate} 
      />
    </div>
  )
}

export default WojtekmajDaterangePicker