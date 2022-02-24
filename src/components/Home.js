import React from 'react';
import DogList from './DogList';
import Heading from './Heading';
import DogsFromAPI from './DogsFromAPI';
import styled from 'styled-components';

const Home = (dogs, deleteDog, addDog, editDog) => {
  return (
    <>
      <Heading />
      <HomeContainer>
          <DogList />
          <DogsFromAPI />
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
  min-height: 60vh;
  max-width: 75vw;
  border: 1px solid green;
  `;
