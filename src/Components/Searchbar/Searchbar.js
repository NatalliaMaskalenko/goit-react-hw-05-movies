import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

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
        setName('');
    }   

    return (
        <header className={s.searchbar}>
            <form onSubmit={handleSubmit} className={s.searchForm}>                
                <input
                    value={name}
                    className={s.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name="search"
                    onChange={handleNameChange}
                />
                <button type="submit" className={s.searchFormButton}>
                    <span className={s.searchFormButtonLabel}>Search</span>
                </button>
            </form>
        </header>
    )
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

