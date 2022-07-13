import React, {useState, useEffect} from 'react'; 
import InfoText from '../components/InfoText.js';  
import FilterBox from '../components/FilterBox.js';
import PriceChart from '../components/PriceChart.js'; 

const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/scraper/all'; 

function Dashboard(props) { 

  const [ allItems , setAllItems]  = useState([]) 

  const [filterSetOptions, setFilterSetOptions] = useState([])
  const [selectedSets, setSelectedSets] = useState(['AFR']) // TODO <- use setter from Dropdown change

  useEffect(()=>{
    fetchRecordsData(); 
  }, []); //Dependancy Array  
 
  const fetchRecordsData = async()=>{
    await fetch(SCRAPER_PATH)
      .then((response)=>response.json())
      .then((data)=> {
        calculateOptions(data);
        setAllItems(data)
      }) 
      .catch((err)=>(err)) 
  }

  /**
   * @param {Array} data 
   */
  const calculateOptions = (data) => {
    const itemCodesUnique = data.reduce((array, item) => {
      const code = item.code 
      if (!array.includes(code)) {
        array.push(code)
      }
      return array
    }, [])  

    setFilterSetOptions(itemCodesUnique)
  }
  
  const selectedType = ['draft']

  const filterItems = allItems.filter((scraper, index)=>{  
    return  selectedSets.includes(scraper.code) &&  selectedType.includes(scraper.type)
  }); 

  return (
    <div>  
      <PriceChart 
      items={filterItems} 
      />  
      <FilterBox 
       items={filterItems}
       setOptions={filterSetOptions}
       // shopOptions=[..]
      />
      <InfoText/>
    </div>
  )
}

export default Dashboard