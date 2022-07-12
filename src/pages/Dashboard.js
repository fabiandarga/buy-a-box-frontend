import React, {useState, useEffect} from 'react'; 
import InfoText from '../components/InfoText.js';  
import FilterBox from '../components/FilterBox.js';
import PriceChart from '../components/PriceChart.js'; 




function Dashboard() { 

  const [ allItems , setAllItems]  = useState([]) 
  useEffect(()=>{
    fetchRecordsData(); 
   
  },[]); //Dependancy Array  
 
  
  const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/scraper/all';

  const fetchRecordsData = async()=>{
    /*'http://localhost:4000/scraper/all'*/ 
    
    await fetch(SCRAPER_PATH)
      .then((response)=>response.json())
      .then((data)=> { console.log(data); setAllItems(data)}) 
      .catch((err)=>console.log(err)) 
  }
  
  const selectedSet = ['AFR']

  const filterItems = allItems.filter((scraper, index)=>{  

      return  selectedSet.includes(scraper.code)
    
  }); 

  console.log(filterItems);

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