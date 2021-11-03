import './App.css';
import { Switch, Route } from 'react-router';

import { Navigation } from './views/Navigation';
import { HomePage } from './views/HomePage';
import { MovieDetailsPage } from './views/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
