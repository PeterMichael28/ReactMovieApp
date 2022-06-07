
import { useState } from 'react';
import axios from "axios"
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';




function App() {
  const [search, setSearch] = useState();
  const [item, setItem] = useState([]);
  const ApiKey = '2150fd9b'

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(search)
    
  }
 
  const fetchData = async (search) => {
    const result = await axios.get(`https://www.omdbapi.com/?s=${search}&page=7&apikey=${ApiKey}`);
    setItem(result.data.Search)
  };

  const handleOnchange = (event) => {
    setSearch(event.target.value);
  }

 

  return (
    <div className="App">
            <Navbar 
            handleOnchange={handleOnchange}
            value={search}
            handleSubmit={handleSubmit}
            />
            <div className='div'>
            {item.length > 0 ? item.map((dat, i) => <Main dat={dat} i={i} /> ) : 'Search for Movies'}
            </div>
    </div>
  );
}

export default App;
