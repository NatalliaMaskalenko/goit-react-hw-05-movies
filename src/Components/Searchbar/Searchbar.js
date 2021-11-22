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
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                    value={name}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="search"
                    onChange={handleNameChange}
                />
            </form>
        </header>
    )
};

// export default class Searchbar extends Component{
//     state = {
//         name: '',
//     }

//     handleNameChange = e => {
//       this.setState({name: e.currentTarget.value.toLowerCase()})
//     }
    
//     handleSubmit = e => {
//         e.preventDefault();
//         if (this.state.name.trim() === '') {
//             window.alert('Введите запрос');
//             return;
//          }
//         this.props.onSubmit(this.state.name);
//         // this.setState({
//         //     name: ''
//         // });
//     }    
       
//     render() {
//         // return (
//         //     <header className="Searchbar">
//         //         <form onSubmit={this.handleSubmit} className="SearchForm">
//         //             <button type="submit" className="SearchForm-button">
//         //                 <span className="SearchForm-button-label">Search</span>
//         //             </button>
//         //             <input
//         //                 value={this.state.name}
//         //                 className="SearchForm-input"
//         //                 type="text"
//         //                 autoComplete="off"
//         //                 autoFocus
//         //                 placeholder="Search images and photos"
//         //                 name="search"
//         //                 onChange = {this.handleNameChange}
//         //             />
//         //         </form>
//         //     </header>
//         // )
//     }
// }

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

