import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
        path="/stocks/:symbol"
        render={(routerProps) => <Stock {...routerProps} /> }
        />
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
