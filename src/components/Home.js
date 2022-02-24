import React from 'react';
import DogList from './DogList';
import Heading from './Heading';
import DogsFromAPI from './DogsFromAPI';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Heading />
      <HomeContainer>
        <ListContainer className='overflow-auto'>
          <DogsFromAPI />
          <DogsFromAPI />
          <DogsFromAPI />
          <DogsFromAPI />
          <DogsFromAPI />
        </ListContainer>
        <TeamContainer>
          <DogList />
        </TeamContainer>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60vh;
  max-width: 100vw;
  border: 4px solid green;
  `;

const ListContainer = styled.div`
  display: flex;
  max-width: 25vw;
  /* border: 1px solid green; */
  flex-direction: column;
  max-height: 60vh;
  `;

const TeamContainer = styled.div`
  display: flex;
  max-width: 70vw;
  /* border: 1px solid blue; */
  `;
