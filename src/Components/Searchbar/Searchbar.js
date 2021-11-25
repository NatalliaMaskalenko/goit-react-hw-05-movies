import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
    const [name, setName] = useState('');

    const handleNameChange = e => {
        setName(e.currentTarget.value.toLowerCase())
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim() === '') {
            window.alert('Введите запрос');
            return;
         }
        onSubmit(name);     
    }   

    return (
        <header className="Searchbar">
            <form onSubmit={handleSubmit} className="SearchForm">                
                <input
                    value={name}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name="search"
                    onChange={handleNameChange}
                />
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
        </header>
    )
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

