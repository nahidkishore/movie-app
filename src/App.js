import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import HomeScreen from './components/pages/HomeScreen';
import MovieDetails from './components/pages/MovieDetails';
import PageNotFound from './components/pages/PageNotFound';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route path='/home'>
            <HomeScreen />
          </Route>
          <Route exact path='/movie/:movieId'>
            <MovieDetails />
          </Route>
          <Route exact path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
