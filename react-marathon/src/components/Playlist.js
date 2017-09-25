import React from 'react'

const Playlist = props => {

  return(
    <li className={props.className} onClick={props.togglePlaylist}>
      {props.name}
    </li>
  )
}


export default Playlist
