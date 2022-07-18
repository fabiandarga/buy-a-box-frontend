import React, {useState } from 'react' 
import Card from './Card.js'
import Button from './Button.js';  
import Tags from './Tags.js';   
import Popup from './Popup.js'; 
import DropDownSelect from './DropDownSelect.js'; 
import WojtekmajDaterangePicker from './WojtekmajDaterangePicker.js'; 
import SchritteDropDown from './SchritteDropDown.js';
import './filterBox.css'  


/**
 * props.selctedShops 
 * props.onShopsChange
 * props.selctedProducts 
 * props.onProductsChange 
 * props.setFrom
 * props.setTo
 */
function FilterBox(props) {   

  const productFilter =  props.setOptions.map( (code) => ({value: code, label: code}))  

  const shopFilter =  props.shopOptions.map( (shop) => ({value: shop, label: shop}))   

  const [showPopup, setShowPopup] = useState(false);  

  const togglePopup = () => { 
    setShowPopup(!showPopup)
  } 

  return ( 
    <Card>
    <div className='filterBox' >  
     <div className= 'filterBoxHeader'>
      <h2>Filter</h2> 
      <Button  onClick={togglePopup} text={'Open Filter'} /> 
      </div> 
    <Tags 
    productOptions = {props.selectedProducts} 
    shopOptions = {props.selectedShops}
    /> 
    { showPopup && <Popup  
    handleClose={togglePopup} 
    content= {  
      <div>   
        <h2>Filter</h2>
        <h3>Shops</h3> 
        <DropDownSelect 
        options={shopFilter} 
        value= {props.selectedShops} 
        onChange= {props.onShopsChange}
        />  
        <h3>product</h3> 
        <DropDownSelect 
        options={productFilter} 
        value= {props.selectedProducts} 
        onChange= {props.onProductsChange}
        />  
        <h2>Zeit-Achse</h2>
        <WojtekmajDaterangePicker  
        from={props.from} 
        to={props.to}
        setFrom={props.setFrom} 
        setTo={props.setTo}
        /> 
        <SchritteDropDown 
        setFrom={props.setFrom} 
        setTo={props.setTo}
        /> 
        <div className='saveBtnFooter' > 
          <Button  onClick={() => { props.onSave() ; togglePopup() }} text={'Save'} ></Button>
        </div> 
      </div>
    }
    /> }  
    </div>  
    </Card>
  )
}

export default FilterBox