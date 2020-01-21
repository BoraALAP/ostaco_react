import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/ostaco_logo";
import welcomeImage from "../../assets/image/welcomeImage.jpg";

const PagePreloader = props => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <InnerBG />
      <InnerImage />
    </Container>
  );
};

const disappear = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  animation: ${disappear} 1s 4s cubic-bezier(0.87, 0, 0.74, 0.99);
  animation-fill-mode: forwards;
  opacity: 1;
`;

const appear = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 0.2
  }
`;

const InnerImage = styled.div`
  background-image: url(${welcomeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 60%;
  height: 60%;
  z-index: 2;
  position: absolute;
  top: 20%;
  left: 20%;
  opacity: 0;
  animation: ${appear} 1.5s cubic-bezier(0.87, 0, 0.74, 0.99);
  animation-fill-mode: forwards;
`;

const moveup = keyframes`
  from {
    height: 100vh
  }

  to {
    height: 0vh
  }
`;

const InnerBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: ${({ theme }) => theme.color.main};
  position: absolute;
  animation: ${moveup} 1.5s 1.5s cubic-bezier(0.87, 0, 0.74, 0.99);
  animation-fill-mode: forwards;
`;

const LogoContainer = styled.div`
  z-index: 10;
  mix-blend-mode: darken;

  svg {
    height: 140px;
  }
`;

export default PagePreloader;
