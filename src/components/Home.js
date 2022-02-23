import React from 'react';
import DogList from './DogList';
import Heading from './Heading';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Heading />
        <DogList />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 80vw;
  border: 1px solid pink;
  `;
