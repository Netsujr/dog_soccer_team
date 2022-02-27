import React, { useContext, useEffect, useState } from 'react';
import DogList from './DogList';
import Heading from './Heading';
import DogsFromAPI from './DogsFromAPI';
import DogFromAPI from './DogFromAPI';
import field from '../images/soccer_field.jpg';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { getBreedsData, getRandomImage } from '../api';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { dogs } = useContext(GlobalContext);
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

  // console.log(breedsList);

  return (
    <>
      <Heading
        onClick={() => setSelectedTab(0)}
      />
      <HomeContainer>
        <Tabs style={{ marginBottom: '20px', color: 'white' }} value={selectedTab} onChange={handleChange}>
          <Tab label="Your Team" />
          <Tab label="Top Dogs of the Week" />
          <Tab label="Top Dog" />
        </Tabs>
        {/* --------------------TEAM-------------------------- */}
        {selectedTab === 0 &&
          <TeamContainer>
            <DogsContainer>
              {dogs.map(dog => (
                <DogList
                  dog={dog}
                />
              ))}
            </DogsContainer>
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
        {selectedTab === 2 && <DogFromAPI />}
      </HomeContainer>
    </>
  );
};

export default Home;

const DogsContainer = styled.div`
  background-image: url('${field}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  min-height: 80vh;
  min-width: 70vw;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
  `;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 65vw;
  flex-wrap: wrap;
  `;

const TeamContainer = styled.div`
  display: flex;
  max-width: 70vw;
  min-width: 70vw;
  `;
