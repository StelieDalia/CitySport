import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Search from './component/Search'
import Marques from './component/Marques'
import Chaussures from './component/Chaussures'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Search/>
     <Marques/>
     <Chaussures/>
    </div>
  );
}

export default App;
