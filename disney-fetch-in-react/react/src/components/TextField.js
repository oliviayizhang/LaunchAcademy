import React from 'react'

const TextField = props => {
  return(
    <div>
      <label>{props.label}
        <input
          type='text'
          value={props.value}
          name={props.name}
          onChange={props.handleInputChange}
        />
      </label>
     </div>
  )
}


export default TextField
