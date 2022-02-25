import React, { useEffect, useState } from 'react';
import DogList from './DogList';
import Heading from './Heading';
import DogsFromAPI from './DogsFromAPI';
import styled from 'styled-components';
import { Tabs, Tab, Appbar } from '@material-ui/core';
import { getBreedsData, getRandomImage } from '../api';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  const [breeds, setBreeds] = useState([]);
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    getRandomImage(breeds[0]).then(data => {
      setRandomImage(data);
    });
  }, [breeds]);

  useEffect(() => {
    getBreedsData().then(data => {
      setBreeds(Object.keys(data));
    });
  }, []);

  const breedsList = breeds.map(breed => breed.toUpperCase());

  console.log(breedsList);

  return (
    <>
      <Heading
        onClick={() => setSelectedTab(0)}
      />
      <HomeContainer>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Your Team" />
          <Tab label="Top Dogs of the Week" />
          <Tab label="Top Dog" />
        </Tabs>
        {/* --------------------TEAM-------------------------- */}
        {selectedTab === 0 &&
          <TeamContainer>
            <DogList />
          </TeamContainer>}
        {/* --------------------API-List-------------------------- */}

        {selectedTab === 1 &&
          <ListContainer>
            {breedsList.map((breed, index) => {
              if (index >= 79)
                return (
                  <DogsFromAPI breed={breed} />
                );
            })}
          </ListContainer>}
        {/* --------------------API-Dog-------------------------- */}
        {selectedTab === 2 && <DogsFromAPI />}
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: 4px solid green;
        `;

const ListContainer = styled.div`
        display: flex;
        justify-content: space-around;
        max-width: 65vw;
        /* border: 1px solid green; */
        flex-wrap: wrap;
        `;

const TeamContainer = styled.div`
        display: flex;
        max-width: 70vw;
        min-width: 70vw;
        /* border: 1px solid blue; */
        `;
