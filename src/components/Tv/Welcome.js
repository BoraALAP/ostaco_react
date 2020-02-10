import React, { useContext } from "react";
import styled from "styled-components";
import Media from "styled-media-query";

import YoutubeBackground from "react-youtube-background";

import Logo from "../../assets/ostaco_logo";
import Arrow from "../../assets/arrow";

import appContext from "../../context/context";

const Welcome = props => {
  const { dispatch } = useContext(appContext);

  const openMenu = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };

  return (
    <Container>
      <TextBox>
        <LogoS>
          <h1>
            <Logo />
          </h1>
        </LogoS>
        <div>
          <h2>
            INNOVATE
            <br />
            AND DESIGN
          </h2>
          <p>
            Ostaco is playing a positive role in tomorrow’s future today . We
            are proud to partner with like-minded buesinsses to achieve
            Enviro-access certification and be recognized as a Carbon Care
            entity.
          </p>
        </div>
      </TextBox>

      <YoutubeBackground videoId={"stG7c_P3dwE"} className={"videobox"} />

      <MainButton onClick={openMenu}>
        <span>How did you like the Show?</span>
        <Arrow />
      </MainButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  display: grid;
  padding: 5%;
  box-sizing: border-box;
  grid-gap: 5%;
  z-index: 200;

  .parallax-outer {
    align-items: center;
    display: grid;
  }

  .videobox {
    position: initial;
    height: 100%;
    width: 100%;
    z-index: 100;
    .Player__videoContainer___2TVqS {
      position: initial;
      ${Media.greaterThan("medium")`
        position: absolute;
      `};
    }
    ${Media.greaterThan("medium")`
      height: 60%;
      position: absolute;
      right: 0;
      top: 20%;
      width: 50%;
    `}
  }

  ${Media.greaterThan("medium")`
  grid-template-columns: 47.5% 47.5%;
  height: 90vh;
  min-height: 800px;
  position: relative;
  `}
`;

const TextBox = styled.div`
  display: grid;
  p {
    color: ${({ theme }) => theme.color.white};
    max-width: 600px;
  }
`;

const LogoS = styled.div`
  justify-content: start;
  margin-bottom: 5%;
  svg {
    height: auto;
    width: 50%;
    max-width: 200px;
  }
`;

const MainButton = styled.div`
  background: ${({ theme }) => theme.color.white};

  padding: 16px 5%;
  border: none;
  justify-content: start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  align-items: center;
  margin-bottom: 30%;

  span {
    display: grid;
    color: ${({ theme }) => theme.color.main};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-family: ${({ theme }) => theme.font.family.header};
    font-size: 16px;
  }

  ${Media.greaterThan("medium")`
  margin-bottom: 0px;
  position: absolute;
  bottom: 0%;
  left: 0;
  `}
`;

export default Welcome;
