import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Media from "styled-media-query";

import appContext from "../../context/context";

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParallaxCache from "../../helper/ParallaxCache";

import Image1 from "../../assets/image/bottom1.png";
import Image2 from "../../assets/image/bottom2.png";
import MainButton from "../Ui/MainButton";

const BottomTwo = props => {
  const { dispatch } = useContext(appContext);

  const openMenu = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  return (
    <PageContainer>
      <Container>
        <Fade duration={2500}>
          <Parallax y={[-20, 20]}>
            <ParallaxCache />
            <ParallaxBanner
              layers={[
                {
                  image: Image1,
                  amount: 0.1
                }
              ]}
              style={{
                height: "500px"
              }}
            />
          </Parallax>
          <Parallax y={[-25, 15]}>
            <ParallaxCache />
            <ParallaxBanner
              layers={[
                {
                  image: Image2,
                  amount: 0.2
                }
              ]}
              style={{
                height: "500px"
              }}
            />
          </Parallax>
        </Fade>
      </Container>

      <MainButton onClick={openMenu}>How did you like the show?</MainButton>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  padding: 15% 5% 10%;
  display: grid;
  grid-gap: 8em;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 0;
  justify-items: center;

  .react-reveal {
    width: 70%;
    height: 80%;
    position: relative;
    &:first-child {
      top: 0%;
      left: 7.5%;
    }
    &:last-child {
      top: 0%;
      right: 7.5%;
    }

    ${Media.greaterThan("medium")`
    
    &:first-child {
      top: 0%;
      left: 7.5%;
    }
    &:last-child {
      top: 20%;
      right: 15%;
    }
    `}
  }

  .parallax-inner {
    position: relative;
    display: grid;
    justify-items: center;
  }

  img {
    display: grid;
    width: 65%;
    position: relative;
  }

  ${Media.greaterThan("medium")`
    grid-auto-flow:column;  
  `}
`;

export default BottomTwo;
