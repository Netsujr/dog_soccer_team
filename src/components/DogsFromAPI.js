import React, { useEffect, useState } from 'react';
import { getBreedsData, getRandomImage } from '../api';
import styled from 'styled-components';
import { FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const dogNames = require('dog-names');

const DogsFromAPI = () => {
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

  const handleClickToShowDog = (e) => {
    const breed = e.target.id;
    getRandomImage(breed).then(data => {
      setRandomImage(data);
    });
  };

  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
  const randomDogAge = Math.floor(Math.random() * 20) + 1;
  const randomGoals = Math.floor(Math.random() * 10) + 1;

  return (
    <DogsContainer>
      <div className='dog'>
        <img src={randomImage} alt="" />
        <h5>{dogNames.allRandom()}</h5>
      </div>
      <div className='info'>
        <BreedContainer>
          <h5>Breed: </h5>
          <p>{randomBreed}</p>
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
  );
};

export default DogsFromAPI;

const DogsContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    min-width: 20vw;
    padding: 5px;
    border: 1px solid black;
    margin: 3px;
    position: relative;

    .displayDog {
      position: absolute;
      bottom: 15px;
      right: 15px;
      border: 1px solid black;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      padding: 5px;
      color: black;
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
