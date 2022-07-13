import React, {useState, useEffect} from 'react'; 
import InfoText from '../components/InfoText.js';  
import FilterBox from '../components/FilterBox.js';
import PriceChart from '../components/PriceChart.js'; 

function Dashboard(props) { 

  const [ allItems , setAllItems]  = useState([]) 
  useEffect(()=>{
    fetchRecordsData(); 
  },[]); //Dependancy Array  
 
  const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/scraper/all';

  const fetchRecordsData = async()=>{
    
    await fetch(SCRAPER_PATH)
      .then((response)=>response.json())
      .then((data)=> { console.log(data); setAllItems(data)}) 
      .catch((err)=>console.log(err)) 
  }
  
  const selectedSet = ['AFR', 'SNC',] 
  const selectedType = ['draft']

  const filterItems = allItems.filter((scraper, index)=>{  
   return  selectedSet.includes(scraper.code) &&  selectedType.includes(scraper.type)
  }); 

  return (
    <div>  
      <PriceChart 
      items={filterItems} 
      />  
      <FilterBox/>
      <InfoText/>
    </div>
  )
}

export default Dashboard