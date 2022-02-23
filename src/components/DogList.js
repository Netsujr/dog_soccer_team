import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const DogList = () => {
  return (
    <ListGroup>
      <ListContainer>
        <ListGroupItem className='listGroup'>
          <DogImage>
            Image
          </DogImage>
          <DogDetails>
            <p>Name:</p>
            <p>Breed:</p>
            <p>Age:</p>
            <p>Goals:</p>
          </DogDetails>
          <ButtonsContainer>
            <Link to='/add' className='btn btn-primary'>Edit Dog</Link>
            <Button className='btn btn-danger' style={{ marginTop: '5px' }}>Delete</Button>
          </ButtonsContainer>
        </ListGroupItem>
      </ListContainer>
    </ListGroup>

  );
};

export default DogList;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30rem;
  background-color: #f5f5f5;
  margin: 2rem;
  border: 1px solid pink;

  .listGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 30rem;
    min-height: 100px;
  }
  `;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid pink;
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
  border: 1px solid pink;

  p {
    margin: 4px 5px;
  }
  `;
