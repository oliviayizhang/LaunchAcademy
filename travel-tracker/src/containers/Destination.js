import React from 'react'

const Destination = props => {
  return(
    <li className={props.className} onClick={props.handleClick}>{props.name}</li>
  )
}

export default Destination
