/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ currentTrack, playlist, setPlaylist }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (currentTrack && isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [currentTrack, isPlaying]);

    const handlePlayPause = () => {
        if(isPlaying) {
            audioRef.current.pause();
        }else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSkipNext = () => {
        const currentIndex = playlist.indexOf(currentTrack);
        const nextTrack = playlist[(currentIndex + 1) % playlist.length];
        setPlaylist((prev) => [...prev, nextTrack]);
    };

    const handleSkipBack = () => {
        const currentIndex = playlist.indexOf(currentTrack);
        const prevTrack = playlist[(currentIndex - 1 + playlist.length) % playlist.length];
        setPlaylist((prev) => [...prev, prevTrack]);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = volume;
    };

    return (
        <div className='player p-3 mb-4 bg-light rounded'>
            {currentTrack ? <h5 className='text-center mb-3'>Now Playing: {currentTrack.title}</h5> : <h5 className='text-center'>Choose a song to play</h5>}
            <audio ref={audioRef} src={currentTrack?.src} onEnded={handleSkipNext}></audio>
            <div className='controls text-center mb-2'>
                <button className='btn btn-secondary mx-2' onClick={handleSkipBack}><FaBackward/></button>
                <button className='btn btn-primary mx-2' onClick={handlePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
                <button className='btn btn-secondary mx-2' onClick={handleSkipNext}><FaForward/></button>
            </div>
            <div className='volume-control d-flex align-items-center justify-content-center'>
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
                <FaVolumeUp/>
            </div>
        </div>
    );
}

export default Player;