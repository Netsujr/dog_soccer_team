import React, { useEffect, useState } from 'react';
import { getBreedsData, getRandomImage } from '../api';
import styled from 'styled-components';
import { FaBone } from 'react-icons/fa';
const dogNames = require('dog-names');

const DogFromAPI = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomImage, setRandomImage] = useState('');
  const [dogRefresh, setDogRefresh] = useState(false);

  const newDogStats = () => {
    setDogRefresh(!dogRefresh);
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

  const changeImage = () => {
    getRandomImage(breeds[0]).then(data => {
      setRandomImage(data);
    });
  };

  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
  const randomDogAge = Math.floor(Math.random() * 20) + 1;
  const randomGoals = Math.floor(Math.random() * 20) + 20;

  return (
    <>
      <DogsContainer>
        <Special>
          <button
            onClick={(newDogStats, changeImage)}
            >
            <FaBone />
          </button>
          <p>New Dog</p>
        </Special>
        <div className='dog'>
          <img src={randomImage} alt="" />
          <h1>{dogNames.allRandom()}</h1>
        </div>
        <div className='info'>
          <BreedContainer>
            <h1>Breed: </h1>
            <p>{randomBreed}</p>
          </BreedContainer>
          <AgeContainer>
            <h1>Age: </h1>
            <p>{randomDogAge}</p>
          </AgeContainer>
          <GoalsContainer>
            <h1>Goals: </h1>
            <p>{randomGoals}</p>
          </GoalsContainer>
        </div>
      </DogsContainer >
    </>
  );
};

export default DogFromAPI;

const DogsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 60vw;
  padding: 5px;
  margin: 3px;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f5f5;
  position: relative;

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
    font-size: 36px;

  }

  img {
    width: 300px;
    height: 300px;
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

const Special = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;

  p {
    font-size: 14px;
    margin: 0;
  }

  button {
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    /* border: 1px solid black; */
  }
  `;
