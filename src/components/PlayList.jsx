/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.min.css';

const PlayList = ({ playlist, setCurrentTrack }) => {
    return (
      <div className='playlist mt-4 d-flex justify-content-center align-items-center'>
        <div className="text-center">
          <h4>Your Playlist</h4>
          <ul className="list-group mt-4">
            {playlist.map((track, index) => (
              <li key={index} className="list-group-item list-group-item-action w-200 font-weight-bold text-primary" onClick={() => setCurrentTrack(track)}>
                {track.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

}

export default PlayList;