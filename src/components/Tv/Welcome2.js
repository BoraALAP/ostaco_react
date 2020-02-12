import React, { useContext } from "react";
import styled from "styled-components";
// import Media from "styled-media-query";

import YoutubeBackground from "react-youtube-background";
// import YouTube from "react-youtube";

import Logo from "../../assets/ostaco_logo";

import appContext from "../../context/context";
import MainButton from "../Ui/MainButton";

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
          <h2>DESIGNED FOR YOUR HOME</h2>
        </div>
        <MainButton onClick={openMenu}>How did you like the show?</MainButton>
      </TextBox>

      <YoutubeBackground
        videoId={"Zv0Q_UGC0No"}
        className={"videobox"}
        overlay={"rgba(0,0,0,.4)"}
      />
      {/* <VideoBox>
        <iframe
          src="https://www.youtube.com/embed/Zv0Q_UGC0No?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
          frameBorder="0"
          title="Brand Video"
          allowFullScreen
        ></iframe>
      </VideoBox> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  display: grid;
  padding: 5%;
  box-sizing: border-box;
  grid-gap: 2em;
  height: fit-content;
  min-height: 90vh;
  z-index: 200;
  position: relative;
  overflow: hidden;
  .parallax-outer {
    align-items: center;
    display: grid;
  }

  .videobox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    display: grid;
    justify-content: center;
    align-content: center;

    .Player__videoIframe___3_jFK {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

const VideoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.div`
  display: grid;
  grid-gap: 3em;
  justify-content: center;
  align-content: center;
  z-index: 100;
  text-align: center;
`;

const LogoS = styled.div`
  justify-content: center;
  margin-bottom: 5%;
  display: grid;
  svg {
    height: auto;
    max-width: 200px;
  }
`;

export default Welcome;
