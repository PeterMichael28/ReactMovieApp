
import { useState } from 'react';
import axios from "axios"
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';




function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState('');
  const ApiKey = '2150fd9b';
  
  const handleOnchange = (event) => {
    setSearch(event.target.value);
  }

  const fetchData = async (search) => {
    const result = await axios.get(`https://www.omdbapi.com/?s=${search}&page=7&apikey=${ApiKey}`);
    const dataSearch = result.data.Search;
    setItems(dataSearch)
    
  };
  // console.log(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(search)
    
  }
 

  

 

  return (
    <div className="App">
            <Navbar 
            handleOnchange={handleOnchange}
            value={search}
            handleSubmit={handleSubmit}
            />
            <div className='div'>
            {items.length > 0 ? items.map((dat, i) => <Main dat={dat} key={i} /> ) : 'Search for Movies'}
            </div>
    </div>
  );
}

export default App;
