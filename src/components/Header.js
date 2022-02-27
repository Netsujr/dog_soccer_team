import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <div class="overlay"></div>
        <video src="https://ak.picdn.net/shutterstock/videos/1029849365/preview/stock-footage-slow-motion-of-a-group-of-playful-pedigreed-golden-retriever-dogs-are-running-towards-the-camera.webm" type="video/webm" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"></video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Doggy Dream Team</h1>
            </div>
          </div>
        </div>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-width: 100vw;
  max-height: 30vh;
  `;

const HeaderContainer = styled.header`
  position: relative;
  background-color: black;
  max-height: 30vh;
  height: 25rem;
  width: 100%;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }


  @media (pointer: coarse) and (hover: none) {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;

    video {
      display: none;
    }
  }
  `;
