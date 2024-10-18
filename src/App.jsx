import { useState } from 'react';
import Player from './components/Player';
import PlayList from './components/PlayList';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import MusicList from './components/MusicList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 3" },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="app-container">
      <div className="container mt-4">
        {/* Add Music Player Title */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4">Music Player</h1> 
          </div>
        </div>

        {/* Search Bar and Category */}
        <div className="row mt-4">
          <div className="col-md-12">
            <SearchBar onSearch={handleSearch} />
            <Category selectedCategory={category} setCategory={setCategory} />
            <MusicList 
              searchTerm={searchTerm} 
              category={category} 
              onTrackSelect={handleTrackSelect} 
              playlist={playlist}
            />
          </div>
        </div>

        {/* Music Player */}
        <div className="row mt-4">
          <div className="col-md-12">
            <Player 
              currentTrack={currentTrack} 
              playlist={playlist} 
              setPlaylist={setPlaylist}
            />
          </div>
        </div>

        {/* Playlist */}
        <div className="row mt-4">
          <div className="col-md-12">
            <PlayList 
              playlist={playlist} 
              onTrackSelect={handleTrackSelect} 
              currentTrack={currentTrack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
