import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
