import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

const Heading = () => {
  return (
    <NavbarContainer>
      <Navbar color="dark" dark>
        <Container className='d-flex'>
          <NavbarBrand href="/">Doggy Team</NavbarBrand>
          <Nav>
            <NavItem>
              <Link to='/add' className='btn btn-primary'>Add Dog</Link>
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
  margin-bottom: 2rem;
  display: flex;
  `;
