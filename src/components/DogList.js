import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import DogsFromAPI from './DogsFromAPI';
import { getBreedsData, getRandomImage } from '../api';

const DogList = () => {
  const { dogs, deleteDog } = useContext(GlobalContext);
  const [dogRefresh, setDogRefresh] = useState(false);
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

  const newDogStats = () => {
    setDogRefresh(!dogRefresh);
    console.log(dogRefresh);
  };


  return (
    <ListGroup style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Special>
        <DogsFromAPI />
        <button onClick={newDogStats} >Get Fresh Stats</button>
      </Special>
      {(dogs.map(dog => (
        <ListContainer key={dog.id}>
          <ListGroupItem className='listGroup'>
            <DogImage>
              <img src={dog.image ? dog.image : 'No image'} alt={dog.name} />
            </DogImage>
            <DogDetails>
              <p>Name: {dog.name ? dog.name : <span>Add name</span>}</p>
              <p>Breed: {dog.breed ? dog.breed : <span>Add breed</span>}</p>
              <p>Age: {dog.age ? dog.age : <span>Add age</span>}</p>
              <p>Goals: {dog.goals ? dog.goals : <span>Add goals</span>}</p>
            </DogDetails>
            <ButtonsContainer>
              <Link style={{ padding: '0.2rem 0.4rem' }} className='btn btn-primary' to={`/edit/${dog.id}`}><FaEdit /></Link>
              <Button style={{ marginTop: '5px', padding: '0.2rem' }} onClick={() => deleteDog(dog.id)} ><FaTrashAlt /></Button>
            </ButtonsContainer>
          </ListGroupItem>
        </ListContainer>
      )))}
    </ListGroup>
  );
};

export default DogList;

const ListContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    max-width: 30rem;
    background-color: #f5f5f5;
    margin: 10px;
    border: 1px solid blue;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    .listGroup {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 20rem;
      max-height: 100px;
      padding: 0.2rem;
    }
    `;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid yellow; */
    `;

const DogImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100px;
    max-width: 100px;
    /* border: 1px solid pink; */

    img {
      max-height: 100px;
      max-width: 100px;
      object-fit: cover;
    }

    `;

const DogDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100px;
    width: 55%;
    /* border: 1px solid red; */

    p {
      margin: 4px 5px;
    }

    span {
      color: red;
      font-weight: bold;
    }
    `;

const Special = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;

    button {
      margin: 0.5rem;
      padding: 0.2rem;
      border-radius: 5px;
      background-color: #f5f5f5;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
      /* border: 1px solid black; */

    }

    `;
