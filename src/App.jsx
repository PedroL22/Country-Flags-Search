import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 ease-in transition-all duration-75">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
