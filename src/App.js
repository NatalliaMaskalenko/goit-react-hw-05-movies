import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Container from './Components/Container';
import Navigation from './Components/Navigation';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName:"HomePage" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName:"MoviesPage" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName:"MovieDetailsPage" */));
// const Cast = lazy(() => import('./views/Cast' /* webpackChunkName:"Cast" */));
// const Reviews = lazy(() => import('./views/Reviews.js' /* webpackChunkName:"Reviews" */));


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

             {/* <Route exact path="/movies/:movieId/cast">
               <Cast />
             </Route>
             
             <Route exact path="/movies/:movieId/reviews">
               <Reviews />
             </Route> */}

             <Route path='/movies/:movieId'
            render={props => {
              return <MovieDetailsPage {...props} />;
            }} />
          <Route path='/:movieId'
            render={props => {
              return <MovieDetailsPage {...props} />;
            }} />
             
             <Route>
               <HomePage />
             </Route>
           </Switch>
         </Suspense>

    </Container>
        
    );
};
