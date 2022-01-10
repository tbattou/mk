import './App.css';
import { NavBar } from './components/navBar/navBar' 
import { ItemListContainer } from './components/contenedor/itemListContainer' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
