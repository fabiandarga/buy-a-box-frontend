import React from 'react'    
import Card from './Card.js'
//import {useState, useEffect} from 'react';   
import {CategoryScale} from 'chart.js';  
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';   


const PriceChart =  (props) =>{ 
  Chart.register(CategoryScale); 
 
  console.log(props.items);
   // input: einzelne items (preis pro Tag für ein produkt)
  // props.items = Array aus { date, lang, code, name, type, price, shop}

  const itemsSorted = props.items.reduce((acc, item) => {
    const key = item.shop + '/' + item.code + '/' + item.lang ; // 'miracle-games/AFR/eng' 
    const date = item.date; 
    console.log('date',date);
    if (acc[key]) {
      acc[key].push(item) 
    } else {
    acc[key] = [item] 
    }
    return acc
  }, {})  

  
  const newDatasets =  Object.entries(itemsSorted).map( (set) => {   
  
    const data = set[1].sort((itemA,itemB) => new Date(itemA.date) - new Date(itemB.date));
    console.log('data' , data); 

    return {  
      label: set[0], 
      data: data.map(item => item.price), 
      backgroundColor: ['yellow'],  
      borderColor: ['red'],
      borderWidth: 1
    }
  })
  console.log('itemsSorted',itemsSorted);
  console.log('newDatasets',newDatasets);

  // { 'miracle-games/AFR/deu': [item1, item2,...], 'trader-online/ORI/deu': [item1, ..], 'trader-online/AFR/deu': [item1, ..]}
 
 const labels =  [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ]; 

  return (  
  <Card>
  <div> 
    <Line   
    items = {props.items}
    data = {
      {  
      datasets: newDatasets,
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
    </Card>
  );
}

export default PriceChart