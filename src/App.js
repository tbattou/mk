import './App.css';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/contenedor/itemListContainer' 
import { Home } from './components/pages/home/home' 
import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (

      <div>
      <NavBar />
      <ItemListContainer/>
      </div>
  );
}

export default App;
