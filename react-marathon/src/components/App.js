import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: props.data.selectedSongId,
      selectedPlaylistId: props.data.selectedPlaylistId
    }
    this.handleClick = this.handleClick.bind(this)
    this.selectPlaylist = this.selectPlaylist.bind(this)
  }

  handleClick(id) {
    this.setState({selectedSongId: id})
  }

  selectPlaylist(id) {
    this.setState({selectedPlaylistId: id})
  }

  render() {
    console.log(this.state)
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="small-6 columns">
          <h1>Playlist</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId={this.state.selectedPlaylistId}
            togglePlaylist={this.selectPlaylist}
          />
        </div>

        <div className="small-6 columns">
          <h1>Songs</h1>
          <SongCollection
            songlist={selectedPlaylistSongs}
            selectedSongId={this.state.selectedSongId}
            toggleSong={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
