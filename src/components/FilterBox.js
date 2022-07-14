import React, {useState} from 'react' 
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
 */
function FilterBox(props) {   

  const productFilter =  props.setOptions.map( (code) => {   
    return  { 
       value: code, label: code
    }
  })  
    
    const shopOptions = [ 
      { value: 'Shop 1', label: 'Shop 1' }, 
      { value: 'Amazon', label: 'Amazon' }
      ] 
  
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
    productOptions = {props.selctedProducts}
    /> 
    { showPopup && <Popup  
    handleClose={togglePopup} 
    content= {  
      <div>   
        <h2>Filter</h2>
        <h3>Shops</h3> 
        <DropDownSelect 
        options={shopOptions}
        />  
        <h3>product</h3> 
        <DropDownSelect 
        options={productFilter} 
        value= {props.selctedProducts} 
        onChange= {props.onProductsChange}
        />  
        <h2>Zeit-Achse</h2>
        <WojtekmajDaterangePicker/> 
        <SchritteDropDown /> 
        <div className='saveBtnFooter' >
        <Button onClick={togglePopup} text={'Save'} ></Button> 
        </div> 
      </div>
    }
    /> }  
    </div>  
    </Card>
  )
}

export default FilterBox