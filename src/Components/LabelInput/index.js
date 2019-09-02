import React from 'react'
import './labelInput.css'

// recebe a propriedade label e o resto do props(herdade)
const LabelInput = ({ label, ...props}) => {
  return (
    <div className="div-label">
      <label>{label}: </label>
      <input className="input-text" {...props} ></input>
    </div>
  )
}

export default LabelInput