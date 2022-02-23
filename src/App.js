import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDog from './components/AddDog';
import EditDog from './components/EditDog';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddDog />} />
          <Route exact path="/edit/:id" element={<EditDog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
