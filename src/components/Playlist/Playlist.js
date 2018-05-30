import React from 'react';
import './Playlist.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue='New Playlist' />
                <div className="TrackList">
                    {
                        this.props.playlist.map(function(playlistSong) {
                            return <PlaylistTrack  playlistSong = {playlistSong} key={playlistSong.id} />
                        })
                    }
                </div>
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default SearchResults;