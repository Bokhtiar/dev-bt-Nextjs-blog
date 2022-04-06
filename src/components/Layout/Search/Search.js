import React from 'react'

export default function Search({...rest}) {
  return (
    <div className='container my-2'>
      <input type="text" placeholder='type here' className='form-control' {...rest} />
    </div>
  )
}
