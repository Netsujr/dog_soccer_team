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
          <NewDogButton>
            <FaBone
              className='bone'
              onClick={(newDogStats, changeImage)} />
          </NewDogButton>
          <p>New Dog</p>
        </Special>
        <div className='dog'>
          <img src={randomImage} alt="" />
          <h1>{dogNames.allRandom()}</h1>
        </div>
        <div className='info'>
          <BreedContainer>
            <h1>Breed: </h1>
            <p>{capitalize(randomBreed)}</p>
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
  width: fit-content;
  padding: 45px;
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
  bottom: 20px;
  right: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 5px;
  margin: 3px;
  box-shadow: 0 0 10px black;

  p {
    font-size: 14px;
    margin: 0;
  }
  `;

const NewDogButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .bone {
    font-size: 46px;
    color: black;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
      transform: scale(1.3);
      color: green;
    }

    `;
