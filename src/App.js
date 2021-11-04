import './App.css';
import { Switch, Route } from 'react-router';
import { Suspense } from 'react';

import { Navigation } from './views/Navigation';
import { HomePage } from './views/HomePage';
import { MovieDetailsPage } from './views/MovieDetailsPage';
import { MoviesPage } from './views/MoviesPage';

// const HomePage = lazy(() => import('./views/HomePage'));
// const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));
// const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */));

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <hr />
      <main>
        <Suspense fallback={<h1>waiting...</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route path="/movies/">
              <MoviesPage />
            </Route>
            <Route>
              {/* <h1>404 Not Found</h1> */}
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
