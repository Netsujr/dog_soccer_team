import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditDog = () => {
  const { editDog, dogs } = useContext(GlobalContext);
  const { id } = useParams();
  const [selectedDog, setSelectedDog] = useState({
    id: id,
    name: '',
    breed: '',
    age: '',
    goals: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const dog = dogs.find(dog => dog.id === id);
    setSelectedDog(dog);
  }, [dogs, id]);


  const onNameChange = (e) => {
    setSelectedDog({ ...selectedDog, name: e.target.value });
  };

  const onBreedChange = (e) => {
    setSelectedDog({ ...selectedDog, breed: e.target.value });
  };

  const onAgeChange = (e) => {
    setSelectedDog({ ...selectedDog, age: e.target.value });
  };

  const onGoalsChange = (e) => {
    setSelectedDog({ ...selectedDog, goals: e.target.value });
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
          <Input type="text" value={selectedDog.name} onChange={onNameChange} placeholder="Name" />
          <Input type="text" value={selectedDog.breed} onChange={onBreedChange} placeholder="Breed" />
          <Input type="number" value={selectedDog.age} onChange={onAgeChange} placeholder="Age" />
          <Input type="number" value={selectedDog.goals} onChange={onGoalsChange} placeholder="Goals" />
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
