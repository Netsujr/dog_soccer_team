import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const DogList = () => {
  return (
    <ListGroup>
      <ListContainer>
        <ListGroupItem className='listGroup'>
          <DogImage>
            <p>Image</p>
          </DogImage>
          <DogDetails>
            <p>Name:</p>
            <p>Breed:</p>
            <p>Age:</p>
            <p>Goals:</p>
          </DogDetails>
          <ButtonsContainer>
            <Link style={{ padding: '0.2rem 0.4rem' }} className='btn btn-primary' to='/edit/:id'><FaEdit/></Link>
            <Button style={{ marginTop: '5px', padding: '0.2rem'  }}><FaTrashAlt/></Button>
          </ButtonsContainer>
        </ListGroupItem>
      </ListContainer>
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
  margin: 2rem;
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
  height: 100px;
  width: 100px;
  border: 1px solid pink;
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
