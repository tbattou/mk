import './App.css';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/contenedor/itemListContainer' 
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (

      <div>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
      </div>
  );
}

export default App;
