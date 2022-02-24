import React, { useState } from 'react';
import DogList from './DogList';
import Heading from './Heading';
import DogsFromAPI from './DogsFromAPI';
import styled from 'styled-components';
import { Tabs, Tab, Appbar } from '@material-ui/core';

const Home = () => {
const [selectedTab , setSelectedTab] = useState(0);
const handleChange = (event, newSelectedTab) => {
  setSelectedTab(newSelectedTab);
};

  return (
    <>
      <Heading />
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Dogs from API" />
        <Tab label="Dog from API" />
      </Tabs>

      <HomeContainer>
        <ListContainer className='overflow-auto'>
          <DogsFromAPI />
          <DogsFromAPI />
          <DogsFromAPI />
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
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60vh;
  max-width: 100vw;
  /* border: 4px solid green; */
  `;

const ListContainer = styled.div`
  display: flex;
  max-width: 25vw;
  /* border: 1px solid green; */
  flex-direction: column;
  max-height: 65vh;
  `;

const TeamContainer = styled.div`
  display: flex;
  max-width: 70vw;
  min-width: 70vw;
  /* border: 1px solid blue; */
  `;
