import './App.css';
import Navbar from './component/Navbar';
import Search from './component/Search';
import Marques from './component/Marques';
import Chaussures from './component/Chaussures';
import React, { useState, useEffect} from "react";
import axios from 'axios';

 

function App() {

  const [SearchTerm, setSearchTerm] = useState("");
  const [allShoes, setallShoes] = useState([]);
  const [chaussures, setChaussures] = useState([]);

  useEffect(() => {
    getChaussures();
  }, []);

  const getChaussures = async () => {
    var response = await axios.get("http://localhost:4000/api/chaussures");
    setallShoes(response.data);
    setChaussures(response.data);

  };




  const handleSearchTerm = () => {
    
    if(SearchTerm.length > 0){
    console.log(SearchTerm)
    var filteredShoes = allShoes.filter(chaussure => chaussure.nom_chaussure.toLowerCase().includes(SearchTerm.toLowerCase()));
    console.log(filteredShoes)
    setChaussures(filteredShoes)
  }
    else{
      getChaussures()
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <Search handleSearchTerm = {handleSearchTerm} setSearchTerm ={setSearchTerm}/>
      <Marques/>
      <Chaussures SearchTerm = {SearchTerm} chaussures = {chaussures} setChaussures = {setChaussures} />
    </div>
  );
}

export default App;