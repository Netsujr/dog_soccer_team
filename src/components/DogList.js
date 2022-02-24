import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
import DefaultDog from './DefaultDog';

const DogList = () => {
  const { dogs, deleteDog } = useContext(GlobalContext);


  return (
    <ListGroup style={{ flexDirection: 'row', flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
      {!dogs.forEach(dog => dog.id !== dog) ? (dogs.map(dog => (
        <ListContainer key={dog.id}>
          <ListGroupItem className='listGroup'>
            <DogImage>
              <img src={dog.image ? dog.image : 'No image'} alt={dog.name} />
            </DogImage>
            <DogDetails>
              <p>Name: {dog.name ? dog.name : 'No name'}</p>
              <p>Breed: {dog.breed ? dog.breed : 'No breed'}</p>
              <p>Age: {dog.age ? dog.age : 'No Age'}</p>
              <p>Goals: {dog.goals ? dog.goals : 'No Goals'}</p>
            </DogDetails>
            <ButtonsContainer>
              <Link style={{ padding: '0.2rem 0.4rem' }} className='btn btn-primary' to={`/edit/${dog.id}`}><FaEdit /></Link>
              <Button style={{ marginTop: '5px', padding: '0.2rem' }} onClick={() => deleteDog(dog.id)} ><FaTrashAlt /></Button>
            </ButtonsContainer>
          </ListGroupItem>
        </ListContainer>
      ))) : (
        dogs.map(dog => (
      <DefaultDog />
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
        border: 1px solid yellow;
        `;

const DogImage = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100px;
        max-width: 100px;
        border: 1px solid pink;

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
        border: 1px solid red;

        p {
          margin: 4px 5px;
        }
        `;
