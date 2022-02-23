import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

const Heading = () => {
  return (
    <NavbarContainer>
      <Navbar color="dark" dark>
        <Container className='headingContainer'>
          <NavbarBrand href="/">Doggy Team</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className='btn btn-primary' to='/add'>Add Dog</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
};

export default Heading;

const NavbarContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 2rem;
  display: flex;
  min-width: 30rem;
  border: 1px solid #e5e5e5;

  .headingContainer {
    display: flex;
    min-width: 40rem;
    justify-content: space-between;
  }

  `;
