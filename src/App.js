import { useState } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

export default function App() {
    const [name, setName] = useState('');

//     const handleFormSubmit = name => {
//     setName(name);
//   };

     return (
    <>
      <Searchbar onSubmit={setName} />
      <ImageGallery name={name}/>
    </>
        
    );
};
