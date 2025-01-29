import React from 'react';
import Navbar from './Components/NavBar';
import HomePage from './pages/HomePage';
import './styles/index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;