import React from 'react'
import './Loader..css'

const Loader = () => {
  return (
    <div className='loaderContainer' >
      <div className="body">
        <div className="front wheel"></div>
        <div className="back wheel"></div>
      </div>

      <div className="cover">
        <div className="path"></div>
      </div>
    </div>
  )
}

export default Loader