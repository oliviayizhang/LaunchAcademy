import React from 'react';
import Playlist from './Playlist'

const PlaylistCollection = props => {

  let playlists = props.playlists.map((playlist) => {
    let togglePlaylist = () => {
      props.togglePlaylist(playlist.id)
    }
    return(
      <Playlist
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        className={props.selectedPlaylistId === playlist.id ? 'selected' : null}
        togglePlaylist={togglePlaylist}
      />
    )
  })
  return(
    <ul>
      {playlists}
    </ul>
  )
}

export default PlaylistCollection;
