/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ searchTracks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        searchTracks(searchTerm);
    }

    return (
        <form onSubmit={handleSearch} className='mb-3'>
            <div className='input-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search for a song'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='btn btn-primary' type='submit'>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;