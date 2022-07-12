import React from 'react' 
import './schritteDropDown.css'  
import Select from 'react-select';


function SchritteDropDown() { 
  
  const  SchritteOption =  [ 
    { value: 'Today', label: 'Today' },
    { value: 'Yesterday', label: 'Yesterday' },  
    { value: 'This Week', label: 'This Week' },  
    { value: 'Last Week', label: 'Last Week' }, 
    { value: 'This Month', label: 'This Month' },
    { value: 'Last Month', label: 'Last Month' }
    ] 

  return (
    <div>  
      <h3>Schritte</h3>
      <Select
      options={SchritteOption}
      />
    </div>
  )
}

export default SchritteDropDown