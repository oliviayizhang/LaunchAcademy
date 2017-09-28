import React from 'react';


const MovieTile = props => {
  let runtime = props.runtime + " minutes"
  let textArray = [props.title, props.releaseYear, runtime]
  let text = textArray.join(" - ")

  return(
      <li>{text}</li>
  )
}

export default MovieTile;
