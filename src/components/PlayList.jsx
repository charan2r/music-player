/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.min.css';

const PlayList = ({ playlist, setCurrentTrack }) => {
    return (
        <div className='playlist mt-4'>
            <h4>Your Playlist</h4>
            <ul className="list-group">
                {playlist.map((track, index) => (
                    <li key={index} className="list-group-item list-group-item-action" onClick={() => setCurrentTrack(track)}>
                      {track.title}
                    </li>
            ))}
           </ul>
        </div>
    );

}

export default PlayList;