import React from 'react';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Country from './components/Country';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:cca2" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
