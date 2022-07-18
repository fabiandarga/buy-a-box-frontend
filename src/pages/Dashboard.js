import React, {useState, useEffect} from 'react'; 
import InfoText from '../components/InfoText.js';  
import FilterBox from '../components/FilterBox.js';
import PriceChart from '../components/PriceChart.js'; 

// http://localhost:4000/scraper/all?from=2022-07-14&to=2022-07-14
const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/scraper/all'; 

function Dashboard(props) { 

  const [ allItems , setAllItems]  = useState([]);
  const [filterSetOptions, setFilterSetOptions] = useState([]);
  const [selectedSets, setSelectedSets] = useState(['AFR']);
  const [filterShopsOptions, setFilterShopsOptions] = useState([]);
  const [selectedShops, setSelectedShops] = useState(['miracle-games']);
  const [from , setFrom] = useState('2022-07-17');
  const [to, setTo] = useState('2022-07-14');

  useEffect( () => { 
    console.log('from', from);
  }, [ from]) 

  useEffect( () => { 
    console.log('to', to);
  }, [ to])

  useEffect(()=>{
    fetchData(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //Dependancy Array  
 
  const fetchData = async()=>{ 

    await fetch(SCRAPER_PATH + '?from=' + from + '&to=' + to)
      .then((response)=>response.json())
      .then((data)=> {
        calculateOptions(data);
        setAllItems(data)
      }) 
      .catch((err)=>(err)) 
  } 

  // New code ↓↓↓↓ 
 // http://localhost:4000/scraper/all?from=2022-07-14&to=2022-07-14
 
  // New code ↑↑↑↑

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

    const itemShopsUnique = data.reduce((array, item) => {
      const shop = item.shop
      if (!array.includes(shop)) {
        array.push(shop)
      }
      return array
    }, [])  

    setFilterShopsOptions(itemShopsUnique)
    setFilterSetOptions(itemCodesUnique)
  } 

  const filterSaveHandler = () => {  
   // es wurde der save button geklickt  
   // from und to  
   // request zum server mit from und to 
   //    fetch data  
   fetchData();
  }

  const selectedType = ['draft']

  const filterItems = allItems.filter((item, index)=>{  
     
    if (selectedSets.length > 0 && !selectedSets.includes(item.code)) {
      return  false;
    } 
    if (selectedType.length > 0 && !selectedType.includes(item.type)) {
      return false;
    } 
    if (selectedShops.length > 0 && !selectedShops.includes(item.shop)) {
      return false
    }
    return  true;
  });  

  return (
    <div>  
      <PriceChart 
      items={filterItems}  
      />  
      <FilterBox  
       selectedShops = {selectedShops.map((shop)=> ({value: shop, label: shop}))} 
       onShopsChange={ (selected)=> {setSelectedShops(selected.map((item)=> item.value))}}
       shopOptions ={filterShopsOptions}
       selectedProducts = {selectedSets.map((code)=> ({value: code, label: code}))}
       onProductsChange={ (selected)=> {setSelectedSets(selected.map((item)=> item.value))}}
       items={filterItems}
       setOptions={filterSetOptions}  
       from={from} 
       to={to}
       setFrom={setFrom} 
       setTo={setTo} 
       onSave={filterSaveHandler}
      />
      <InfoText/>
    </div>
  )
}

export default Dashboard