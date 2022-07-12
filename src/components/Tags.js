import React from 'react'  
import Tag from './Tag' 

import './tags.css'

function Tags(props) { 

  const productFilter = ['2x2 Collector', '2x2 Collector']
const shopFilter = ['Shop 1', ' Amazon'] 

  return (
    <div>   
      <div> 
        < div className='tagscategory'> Shops</div>   
       

        <div  className='allTags'> 
        {shopFilter.map((filter) => { 
         return <Tag>{filter}</Tag> 
       })}
        </div> 
      </div> 
      <div> 
       <div className='tagscategory'>Products</div>   
       <div className='allTags'> 
       {productFilter.map((filter) => { 
         return <Tag>{filter}</Tag> 
       })}
        </div> 
      </div>
    </div>
  )
}

export default Tags