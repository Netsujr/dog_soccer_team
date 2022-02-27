import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDog from './components/AddDog';
import EditDog from './components/EditDog';
import Header from './components/Header';
import styled from 'styled-components';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <AppContainer>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<AddDog />} />
            <Route exact path="/edit/:id" element={<EditDog />} />
          </Routes>
        </Router>
      </AppContainer>
    </GlobalProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 150vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?cs=srgb&dl=pexels-jonathan-petersson-399187.jpg&fm=jpg');
  background-size: cover;

  `
