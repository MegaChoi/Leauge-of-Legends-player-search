import { useState } from 'react';
import { SearchBox, Content, Navbar, Header} from './components';
import { BrowserRouter } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import './App.css';

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };
  return (
    <BrowserRouter>
        <div className='h-screen'>
        <Navbar/>
        <Header/>
        <SearchBox onSearch={handleSearch} />
        </div>
    </BrowserRouter>
  );
}

export default App;