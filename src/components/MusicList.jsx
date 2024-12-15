/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.min.css';

const MusicList = ({ searchTerm, category, onTrackSelect }) => {
  const musicData = [
    { title: 'In the End by Linkin Park', genre: 'Pop', src: '/assets/song1.mp3' },
    { title: 'Radioactive by Imagine Dragons', genre: 'Rock', src: 'song2.mp3' },
    // Add more songs here
  ];

  const filteredMusic = musicData.filter((track) => 
    (category === 'All' || track.genre === category) &&
    track.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="music-list text-center">
      <h5 className="mb-3">Available Tracks</h5>
      <ul className="list-group d-flex flex-column align-items-center">
        {filteredMusic.map((track, index) => (
          <li 
            key={index} 
            className="list-group-item d-flex justify-content-between align-items-center w-50">
            <span className="font-weight-bold text-primary">{track.title}</span>
            <button className="btn btn-primary" onClick={() => onTrackSelect(track)}>
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
