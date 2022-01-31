import './App.css';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/contenedor/itemListContainer' 
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import { Cart } from './components/cart/cart';
import { CartProvider } from './components/cartContext/cartContext';


function App() {
  return (

      <div>
        <BrowserRouter>
        <NavBar />
        <Switch>
          <CartProvider>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route
            exact
            path="/item/:itemId"
            component={ItemDetailContainer}
          ></Route>
          <Route path="/cart" component={Cart}></Route>
          <Redirect to="/" />
          </CartProvider>
        </Switch>
        <footer>mortalKompra S.A. TM</footer>
      </BrowserRouter>
      </div>
  );
}

export default App;
