import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const DogList = () => {
  return (
    <ListGroup>
      <ListContainer>
        <ListGroupItem className='listGroup'>
          <strong>Dog 1</strong>
          <ButtonsContainer>
            <Link to='/add' className='btn btn-primary'>Edit Dog</Link>
            <Button className='btn btn-danger' style={{ marginLeft: '10px'}}>Delete</Button>
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
  }
  `;

  const ButtonsContainer = styled.div`
  display: flex;
  `;
