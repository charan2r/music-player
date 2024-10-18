/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
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
        <div>
            {currentTrack ? <h5>Now Playing: {currentTrack.title}</h5> : <h5>Choose a song to play</h5>}
            <audio ref={audioRef} src={currentTrack?.src} onEnded={handleSkipNext}></audio>
            <div>
                <button onClick={handleSkipBack}><FaBackward/></button>
                <button onClick={handlePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
                <button onClick={handleSkipNext}><FaForward/></button>
            </div>
            <div>
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
                <FaVolumeUp/>
            </div>
        </div>
    );
}

export default Player;