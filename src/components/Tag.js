import React from 'react'


function Tag(props) {
  return (
    <div className='tagsName'>{props.children}<span className='deleteTag' >X</span> </div>
  )
}

export default Tag