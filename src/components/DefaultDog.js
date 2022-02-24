import React, { useContext } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { ListGroupItem, Button } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';
const image = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/119509859/original/a4b4d447d4d4223232912ba81768f00177de6565/do-animal-dog-cat-pet-illustration-cartoon-caricature.png;'

const DefaultDog = () => {
  const { addDog } = useContext(GlobalContext);

  return (
    <ListContainer>
      <ListGroupItem className='listGroup'>
        <DogImage>
          <img src={image} alt='Dog' />
        </DogImage>
        <DogDetails>
          <p>Name: </p>
          <p>Breed: </p>
          <p>Age: </p>
          <p>Goals: </p>
        </DogDetails>
        <ButtonsContainer>
          <Button style={{ marginTop: '5px', padding: '0.2rem' }} onClick={() => addDog()} ><FaPlusCircle /></Button>
        </ButtonsContainer>
      </ListGroupItem>
    </ListContainer>
  );
};

export default DefaultDog;

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
