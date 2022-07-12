import React,{useState} from 'react' 
 

import DateRangePicker from "@wojtekmaj/react-daterange-picker";


function WojtekmajDaterangePicker() { 
  
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div> 
      <h3>Zeitrahmen</h3> 
      <DateRangePicker  
      onChange={onChange}  
      value={value} />
    </div>
  )
}

export default WojtekmajDaterangePicker