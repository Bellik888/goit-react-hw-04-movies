import './App.css';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';

import { Navigation } from './views/Navigation/Navigation';
// import { HomePage } from './views/HomePage/HomePage';
// import { MovieDetailsPage } from './views/MovieDetailsPage/MovieDetailsPage';
// import { MoviesPage } from './views/MoviesPage/MoviesPage';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
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
