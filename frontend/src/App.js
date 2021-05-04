import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // in order use Link we have to add these are aslo.

function App() {
  return (
    <Router>
      {/* Navbar */}
      {/* SideDrower */}
      {/* BackDrop */}
      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/product/:id"></Route>
          <Route exact path="/cart"></Route>
        </Switch>
      </main>
      {/* HomeScreem */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
