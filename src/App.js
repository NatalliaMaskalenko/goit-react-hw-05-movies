// import { useState } from 'react';
import { Route, Switch } from 'react-router';
import Container from './Components/Container';
import Navigation from './Components/Navigation';

// import Searchbar from './Components/Searchbar';
// import ImageGallery from './Components/ImageGallery';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';


export default function App() {
    // const [name, setName] = useState('');

//     const handleFormSubmit = name => {
//     setName(name);
//   };

     return (
    <Container>
      {/* <Searchbar onSubmit={setName} />
      <ImageGallery name={name}/> */}
         <Navigation />
         <Switch>
           <Route path="/" exact>
             <HomePage />
           </Route>

           <Route path="/movies" exact>
             <MoviesPage />
           </Route>

           <Route path="/movies/:movieId/cast">
             <Cast />
           </Route>

           <Route path="/movies/:movieId/reviews">
             <Reviews />
           </Route>

           <Route path="/movies/:movieId" exact>
             <MovieDetailsPage />
           </Route>

           <Route>
             <HomePage />
           </Route>
         </Switch>

    </Container>
        
    );
};
