import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // in order use Link we have to add these are aslo.

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import AdminProductScreen from './screens/AdminProductScreen';
import AddProductScreen from './screens/AddProductScreen';
import EditProductScreen from './screens/EditProductScreen';
import DeleteProductScreen from './screens/DeleteProductScreen';

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)}></Navbar>
      {/* SideDrower */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* BackDrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/adminproduct" component={AdminProductScreen} />
          <Route exact path="/addproduct" component={AddProductScreen} />
          <Route exact path="/editproduct/:id" component={EditProductScreen} />
          <Route
            exact
            path="/deleteproduct/:id"
            component={DeleteProductScreen}
          />
        </Switch>
      </main>
      {/* HomeScreem */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
