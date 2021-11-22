import { Component } from 'react';
import PropTypes from 'prop-types';
// import {ImSearch} from 'react-icons/im'

export default class Searchbar extends Component{
    state = {
        name: '',
    }

    handleNameChange = e => {
      this.setState({name: e.currentTarget.value.toLowerCase()})
    }
    
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name.trim() === '') {
            window.alert('Введите запрос');
            return;
         }
        this.props.onSubmit(this.state.name);
        // this.setState({
        //     name: ''
        // });
    }    
       
    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        value={this.state.name}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="search"
                        onChange = {this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

