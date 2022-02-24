import React, { useEffect, useState } from 'react';
import { getBreedsData, getRandomImage } from '../api';
import styled from 'styled-components';

const dogNames = require('dog-names');

const DogsFromAPI = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    getBreedsData().then(data => {
      setBreeds(Object.keys(data));
    });
  }, []);

  useEffect(() => {
    getRandomImage(breeds[0]).then(data => {
      setRandomImage(data);
    });
  }, [breeds]);

  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
  const randomDogAge = Math.floor(Math.random() * 20) + 1;
  const randomGoals = Math.floor(Math.random() * 10) + 1;

  return (
    <DogsContainer>
      <h1>{dogNames.allRandom()}</h1>
      <img src={randomImage} alt="" />
      <h2>{randomBreed}</h2>
      <p>{randomDogAge}</p>
      <p>{randomGoals}</p>
    </DogsContainer>
  );
};

export default DogsFromAPI;

const DogsContainer = styled.div`
  `;
