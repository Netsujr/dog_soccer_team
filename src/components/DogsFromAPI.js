import React, { useEffect, useState } from 'react';
import { getBreedsData, getRandomImage } from '../api';
import styled from 'styled-components';

const DogsFromAPI = () => {
const [dogs, setDogs] = useState([]);
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

  return (
    <DogsContainer>
    <img src={randomImage} alt="" />
    {/* <h2>{breeds}</h2> */}
    </DogsContainer>
  );
};

export default DogsFromAPI;

const DogsContainer = styled.div`
`;
