import './App.css';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/contenedor/itemListContainer' 
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";

function App() {
  return (

      <div>
        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route
            exact
            path="/item/:itemId"
            component={ItemDetailContainer}
          ></Route>
          <Redirect to="/" />
        </Switch>
        <footer>mortalKompra S.A. TM</footer>
      </BrowserRouter>
      </div>
  );
}

export default App;
