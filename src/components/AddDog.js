import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';

const AddDog = () => {
  const { addDog } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [goals, setGoals] = useState('');
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const newDog = {
    id: uuid(),
    name,
    breed,
    age,
    goals,
  };
  addDog(newDog);
  navigate('/');
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onBreedChange = (e) => {
    setBreed(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onGoalsChange = (e) => {
    setGoals(e.target.value);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Add a Dog to Team</Label>
          <Input type="text" name='name' value={name} onChange={onNameChange} placeholder="Name" />
          <Input type="text" breed='breed' value={breed} onChange={onBreedChange} placeholder="Breed" />
          <Input type='number' age='age' value={age} onChange={onAgeChange} placeholder="Age" />
          <Input type="number" goals='goals' value={goals} onChange={onGoalsChange} placeholder="Goals" />
        </FormGroup>
        <ButtonsContainer>
          <Button>Submit</Button>
          <Link to='/' className='btn btn-danger'>Home</Link>
        </ButtonsContainer>
      </Form>
    </FormContainer>
  );
};

export default AddDog;

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
