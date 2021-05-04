import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // in order use Link we have to add these are aslo.

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      {/* Navbar */}
      {/* SideDrower */}
      {/* BackDrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreem */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
