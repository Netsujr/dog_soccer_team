import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const AddDog = () => {

  const { addDog } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
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
      image
    };
    addDog(newDog);
    navigate('/');
    console.log(newDog);
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

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'doggyupload');

    axios.post('https://api.cloudinary.com/v1_1/netsujr/image/upload', formData)
      .then(res => {
        setImage(res.data.secure_url);
      });
  };


  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup className='d-flex flex-column align-items-center p-3'>
          <Label for="name"><h1>Add a Dog to Team</h1></Label>
          <Input type="text" value={name} onChange={onNameChange} placeholder="Name" />
          <Input type="text" value={breed} onChange={onBreedChange} placeholder="Breed" />
          <Input type='number' value={age} onChange={onAgeChange} placeholder="Age" />
          <Input type="number" value={goals} onChange={onGoalsChange} placeholder="Goals" />
          <ImageContainer>
            <Input type='file' onChange={(event) => setImage(event.target.files[0])} />
            <Button className='btn btn-success' onClick={uploadImage}>Upload</Button>
          </ImageContainer>
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
  padding: 10px;
  `;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
