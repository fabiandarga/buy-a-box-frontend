import React from 'react' 
import React from 'react';  
import './recordsAdd.css'
import {useState, useEffect} from 'react'; 



function PostScraper() {  

  /* 
  date: {type:String, required: true},
  lang: {type:String , required: true},
  code: {type:String , required: true},
  name: {type:String , required: true},
  type: {type:String , required: true}, 
  price: {type:String , required: true},
  shop: {type:String , required: true} 
  */
 
  const [ scraperPost, setScraperPost]  = useState([]) ; //Dependancy Array 
  const initialInput = { 
    date: '',
    lang: '', 
    code: '',  
    name: '',
    type: '', 
    price: '',
    shop: ''
   }    

   
  

  return (
    <div>PostScraper</div>
  )
}

export default PostScraper