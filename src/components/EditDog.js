import React, {useState} from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditDog = () => {
  // const { addDog } = useContext(GlobalContext);
  // const [dogName, setDogName] = useState('');
  // const [breed, setBreed] = useState('');
  // const [age, setAge] = useState('');
  // const [goals, setGoals] = useState('');
  // const navigate = useNavigate();


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newDog = {
  //     id: uuid(),
  //     name: e.target.name.value,
  //     breed: e.target.breed.value,
  //     age: e.target.age.value,
  //     goals: e.target.goals.value,
  //   };
  //   addDog(newDog);
  //   navigate('/');
  // };

  // const onNameChange = (e) => {
  //   setDogName(e.target.value);
  // };

  // const onBreedChange = (e) => {
  //   setBreed(e.target.value);
  // };

  // const onAgeChange = (e) => {
  //   setAge(e.target.value);
  // };

  // const onGoalsChange = (e) => {
  //   setGoals(e.target.value);
  // };

  return (
    <FormContainer>
      <Form>
        <FormGroup>
          <Label for="name">Edit Dog</Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
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
