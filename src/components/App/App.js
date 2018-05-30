import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const searchResults = [
    {
        id: '1',
        song: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water'
    },
    {
        id: '2',
        song: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story'
    },
    {
        id: '3',
        song: 'Tiny Dancer',
        artist: 'Rockabye Baby!',
        album: 'Lullaby Renditions of Elton John'
    },
    {
        id: '4',
        song: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer'
    },
    {
        id: '5',
        song: 'Tiny Dancer - Live Album Version',
        artist: 'Ben Folds',
        album: 'Ben Folds Live'
    }
];

const playlist = [
    {
        id: '1',
        song: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!... I Did It Again'
    },
    {
        id: '2',
        song: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney'
    },
    {
        id: '3',
        song: 'It\'s Not Right But It\'s Okay',
        artist: 'Whitney Houston',
        album: 'My Love Is Your Love'
    }
];

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults searchResults = {searchResults} />
                    <Playlist playlist = {playlist} />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
