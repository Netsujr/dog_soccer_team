import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditDog = () => {
  const { dogs, editDog } = useContext(GlobalContext);
  const navigate = useNavigate();
  let { slug } = useParams();
  const currentDog = dogs.find(dog => dog.slug === slug);

  const [selectedDog, setSelectedDog] = useState({
    id: null,
    name: '',
    breed: '',
    age: '',
    goals: '',
  });

  // console.log(selectedDog?.name ? selectedDog.name : '');
  // console.log(currentDog);

  useEffect(() => {
    const selectedDog = currentDog;
    console.log(currentDog);
    setSelectedDog(selectedDog);
  }, [currentDog, dogs]);


  const handleChange = (dogKey, newValue) => {
    setSelectedDog({
      ...selectedDog,
      [dogKey]: newValue,
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
            name='name'
          />


          <Input
            type="text"
            value={selectedDog?.breed ? selectedDog.breed : ''}
            onChange={(e) => handleChange('breed', e.target.value)}
            placeholder="Breed"
            name='breed'
          />

          <Input
            type="number"
            value={selectedDog?.age ? selectedDog.age : ''}
            onChange={(e) => handleChange('age', e.target.value)}
            placeholder="Age"
            name='age'
          />

          <Input
            type="number"
            value={selectedDog?.goals ? selectedDog.goals : ''}
            onChange={(e) => handleChange('goals', e.target.value)}
            placeholder="Goals"
            name='goals'
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
