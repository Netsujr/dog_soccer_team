import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddDog = () => {
  const { addDog } = useContext(GlobalContext);
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const newDog = {
    id: 10,
    name: 'renato',
  };
  addDog(newDog);
  navigate('/');
  };

  return (
    <FormContainer>
      <Form onSubmit={() => handleSubmit()}>
        <FormGroup>
          <Label for="name">Add a Dog to Team</Label>
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
