import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Routes from './Routes';


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
  </BrowserRouter>
);

export default App;
