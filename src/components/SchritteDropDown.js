import React from 'react' 
import './schritteDropDown.css'  
import Select from 'react-select';

function SchritteDropDown(props) { 
  const dateThisWeek = new Date(Date.now() - 604800000).toISOString().slice(0,10);  
  const dateThisMonth = new Date(Date.now() - 2628000000).toISOString().slice(0,10);  
  const dateThisYear = new Date(Date.now() - 31536000000).toISOString().slice(0,10);
  
   const  onChangeDateHandler = (event) => {    
    props.setFrom(event.value); 
    props.setTo( new Date().toISOString().slice(0,10)); 
   }
  
  const  SchritteOption =  [ 
    { value: dateThisWeek, label: 'This Week' , name: 'This Week' },
    { value: dateThisMonth, label: 'This Month' , name: 'This Month' },
    { value: dateThisYear, label: 'This Year' , name: 'This Year'},
    ] 

  return (
    <div>  
      <h3>Schritte</h3>
      <Select  
      onChange= {onChangeDateHandler}
      options={SchritteOption}
      />
    </div>
  )
}

export default SchritteDropDown