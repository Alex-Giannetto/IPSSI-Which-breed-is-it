import React from 'react'
import './Preview.css'

function Preview(props) {
  return (
    <div className="fileInfo">
        <img
          className="fileInfo-preview-image"
          src={props.f.preview}
          alt={props.f.name}
          id="image"
        />
    </div>
  )
}

export default Preview
