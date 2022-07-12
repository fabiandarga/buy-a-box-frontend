import React from 'react';
import './getScraper.css'
import {useState, useEffect} from 'react';   




function GetScraper() { 
  
  const [ scraper , setScraper]  = useState([]) 
  useEffect(()=>{
    fetchRecordsData();
  },[]); //Dependancy Array  

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const SCRAPER_PATH = BACKEND_URL + '/scraper/all' 

  const fetchRecordsData = async()=>{
    /*'http://localhost:4000/scraper/all'*/ 
    
    await fetch(SCRAPER_PATH)
      .then((response)=>response.json())
      .then((data)=> { console.log(data); setScraper(data)}) 
     
      .catch((err)=>console.log(err))
  }

  return (
    <div>GetScraper 

{scraper.map((scraper, index)=>( 
      <div className='scraperCard'>

      <ul className='scraperUl'  key={index}> 
        <li><span className='scraperkeys' >Date:</span> <span className='scraperValues'>{scraper.date}</span></li>
        <li><span className='scraperkeys'>Lang:</span> <span className='scraperValues' >{scraper.lang}</span></li> 
        <li><span className='scraperkeys'>Code:</span>  <span className='scraperValues'>{scraper.code}</span></li>
        <li><span className='scraperkeys'>Name:</span>  <span className='scraperValues'>{scraper.name}</span></li> 
        <li><span className='scraperkeys'>Type:</span>  <span className='scraperValues'>{scraper.type}</span></li> 
        <li><span className='scraperkeys'>Price:</span>  <span className='scraperValues'>{scraper.price}</span></li>
        <li><span className='scraperkeys'>Shop:</span>  <span className='scraperValues'>{scraper.shop}</span></li>
      </ul> 
      </div>
    ))}
    </div>
  )
}

export default GetScraper