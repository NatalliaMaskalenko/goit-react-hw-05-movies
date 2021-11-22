import { Component } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends Component{
state = {
  name: '', 
}
  handleFormSubmit = (name) => {
    this.setState({ name });
  };
  
render() {
  return (
    <>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGallery name={this.state.name}/>
    </>
        
    );
  }
}

export default App;
