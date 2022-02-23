import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>Doggo DreamTeam</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  background-color: rgba(130, 230, 0, 0.5);
  min-width: 100vw;
`;
