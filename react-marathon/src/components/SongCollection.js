import React from 'react'
import Song from './song'

const SongCollection = props => {

  let songs = props.songlist.map((song) => {
    let toggleSong = () => {
      props.toggleSong(song.id)
    }
    return(
      <Song
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artist}
        className={props.selectedSongId === song.id ? 'selected' : null}
        toggleSong={toggleSong}
      />
    )
  })
  return(
    <ul>
      {songs}
    </ul>
  )

}

export default SongCollection
