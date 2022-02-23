import React from 'react';
import DogList from './DogList';
import Heading from './Heading';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Heading />
      <HomeContainer>
        <Captain>
          <DogList />
        </Captain>
        <DogList />
        <DogList />
        <DogList />
        <DogList />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  max-width: 80vw;
  border: 1px solid green;
  `;

const Captain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  `;
