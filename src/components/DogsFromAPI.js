import React, { useEffect, useState } from 'react';
import { getBreedsData, getRandomImage } from '../api';
import styled from 'styled-components';
const dogNames = require('dog-names');

const DogsFromAPI = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomImage, setRandomImage] = useState('');

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

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

  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
  const randomDogAge = Math.floor(Math.random() * 20) + 1;
  const randomGoals = Math.floor(Math.random() * 10) + 10;

  return (
    <>
      <DogsContainer>
        <div className='dog'>
          <img src={randomImage} alt="" />
          <h5>{dogNames.allRandom()}</h5>
        </div>
        <div className='info'>
          <BreedContainer>
            <h5>Breed: </h5>
            <p>{capitalize(randomBreed)}</p>
          </BreedContainer>
          <AgeContainer>
            <h5>Age: </h5>
            <p>{randomDogAge}</p>
          </AgeContainer>
          <GoalsContainer>
            <h5>Goals: </h5>
            <p>{randomGoals}</p>
          </GoalsContainer>
        </div>
      </DogsContainer >
    </>
  );
};

export default DogsFromAPI;

const DogsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 20vw;
  padding: 5px;
  margin: 3px;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f5f5;

  @media (max-width: 1250px) {
    width: 30vw;
  }

  .dog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  p {
    margin-left: 10px;
    margin-bottom: 6px;
    font-size: 16px;

  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 15px;
  }
  `;

const BreedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const AgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const GoalsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
