import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditDog = ({}) => {
  const { dogs, editDog } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { slug } = useParams();
  let currentDogId = dogs.find(dog => dog.id === slug);
  // let { id } = useParams();
  const [selectedDog, setSelectedDog] = useState({
    id: null,
    name: '',
    breed: '',
    age: '',
    goals: '',
  });

  console.log(selectedDog?.name ? selectedDog.name : '');


  useEffect(() => {
    const dogID = currentDogId;
    setSelectedDog(dogID);
  }, [currentDogId, dogs]);

  const handleChange = (userKey, newValue) => {
    setSelectedDog({
      ...selectedDog,
      [userKey]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDog(selectedDog);
    navigate('/');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Edit Dog</Label>

          {/* {console.log(selectedDog.name)} */}
          <Input
            type="text"
            value={selectedDog?.name ? selectedDog.name : ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Name"
          />


          <Input
            type="text"
            value={selectedDog?.breed ? selectedDog.breed : ''}
            onChange={(e) => handleChange('breed', e.target.value)}
            placeholder="Breed"
          />

          <Input
            type="number"
            value={selectedDog?.age ? selectedDog.age : ''}
            onChange={(e) => handleChange('age', e.target.value)}
            placeholder="Age"
          />

          <Input
            type="number"
            value={selectedDog?.goals ? selectedDog.goals : ''}
            onChange={(e) => handleChange('goals', e.target.value)}
            placeholder="Goals"
          />

        </FormGroup>
        <ButtonsContainer>
          <Button>Submit</Button>
          <Link to='/' className='btn btn-danger'>Home</Link>
        </ButtonsContainer>
      </Form>
    </FormContainer>
  );
};

export default EditDog;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 30rem;
  background-color: #f5f5f5;
  margin-top: 2rem;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  `;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  `;
