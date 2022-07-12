import React from 'react' 
import InfoText from '../components/InfoText.js';  
import FilterBox from '../components/FilterBox.js';
import PriceChart from '../components/PriceChart.js'; 

function Dashboard() {
  return (
    <div>  
      <PriceChart/> 
      <FilterBox/>
      <InfoText/>
    </div>
  )
}

export default Dashboard