import React from 'react' 
import './popup.css'

function Popup(props) {
  return ( 
    <div className='popupBoxContent' >
    <div className='popupBox' > 
      <div className='box' >  
      <div className='closeContent' > 
      <h2>Title</h2>
      <div className='close' onClick={props.handleClose} >X</div> 
      </div>
      {props.content}
      </div>
    </div> 
    </div>
  )
}

export default Popup