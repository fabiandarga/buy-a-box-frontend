import React from 'react'   
//import {useState, useEffect} from 'react';   
import {CategoryScale} from 'chart.js';  
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';   







const PriceChart =  () =>{ 
  Chart.register(CategoryScale); 


 /*
  const [ scraper , setScraper]  = useState([]) 
  useEffect(()=>{
    fetchRecordsData();
  },[]); //Dependancy Array  

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const SCRAPER_PATH = BACKEND_URL + '/scraper/all' 

  const fetchRecordsData = async()=>{
   // 'http://localhost:4000/scraper/all'
    
    await fetch(SCRAPER_PATH)
      .then((response)=>response.json())
      .then((data)=> { console.log(data); setScraper(data)}) 
     
      .catch((err)=>console.log(err))
  }  
  */

 const labelNameOne = 'One';
 let  dataInfoOne = [12, 19, 3, 5, 2, 3]; 
 const  backgroundColorOne = ['yellow'] ;
 const borderColorOne = ['red'];
 const borderWidthOne = 1;  

 const labelNameTwo = 'Two';
 let  dataInfoTwo = [2, 9, 13, 15, 12, 1]; 
 const  backgroundColorTwo = ['red'] ;
 const borderColorTwo =[ 'yellow'];
 const borderWidthTwo = 1;  


 const labels =  [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ];
  return ( <div> 
    
    <Line   
    
    data = {
      {  
      datasets: [ 
        { 
          label: labelNameOne, 
          data: dataInfoOne, 
          backgroundColor: backgroundColorOne,  
          borderColor: borderColorOne,
          borderWidth: borderWidthOne,
        }, 
        { 
          label: labelNameTwo, 
          data: dataInfoTwo, 
          backgroundColor: backgroundColorTwo,  
          borderColor: borderColorTwo,
          borderWidth: borderWidthTwo,
        }
      ],
      labels: labels,
    }
  } 
    height = {400} 
    width = {600}  
    options = {{ 
      maintainAspectRatio: false, 

    }}
    
     />
    
   
    </div> 
    
  );
}

export default PriceChart