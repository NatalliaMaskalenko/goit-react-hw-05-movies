import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Container from './Components/Container';
import Navigation from './Components/Navigation';

// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './views/Cast';
// import Reviews from './views/Reviews';


const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName:"HomePage" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName:"MoviesPage" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName:"MovieDetailsPage" */));
const Cast = lazy(() => import('./views/Cast' /* webpackChunkName:"Cast" */));
const Reviews = lazy(() => import('./views/Reviews' /* webpackChunkName:"Reviews" */));


export default function App() {

     return (
       <Container>
         <Navigation />
         
         <Suspense fallback="waiting...">
           <Switch>
             <Route path="/" exact>
               <HomePage />
             </Route>
             
             <Route path="/movies" exact>
               <MoviesPage />
             </Route>                
             
             <Route path="/movies/:movieId" exact>
               <MovieDetailsPage />
             </Route>
             
             <Route>
               <HomePage />
             </Route>
           </Switch>
         </Suspense>

    </Container>
        
    );
};
