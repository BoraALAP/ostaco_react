import React, { useContext, useEffect, useState } from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Modal from "react-modal";
import styled from "styled-components";
import Media from "styled-media-query";

import Form from "./Form";
import appContext from "../../context/context";
import Welcome from "./Welcome";
import Products from "./Products";
import BottomTwo from "./BottomTwo";
import Footer from "./Footer";

import Image1 from "../../assets/image/product1img.png";
import Image2 from "../../assets/image/product2img.png";
import Cross from "../../assets/icons/cross";

const PageContainer = props => {
  const { store, dispatch } = useContext(appContext);
  const [load, setLoad] = useState(false);

  const Product1 =
    "https://studio204.sirv.com/Window%201/Window%201.spin?fullscreen=false&zoom=0";
  const Product2 =
    "https://studio204.sirv.com/Window%202/Window%202.spin?fullscreen=false&zoom=0";

  useEffect(() => {
    setLoad(true);
  }, []);

  const afterOpenModal = () => {
    console.log("opened");
  };

  const closeModal = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  return (
    <ParallaxProvider>
      <Container loading={load ? "1" : "0"}>
        <Welcome />
        <Products product={Product1} image={Image1} />
        <Products product={Product2} image={Image2} reverse />
        <BottomTwo />
        <Footer />

        <ModalS
          ariaHideApp={false}
          isOpen={store.form}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Customer Form"
          style={{
            content: {
              position: "absolute",
              overflowY: "auto",
              maxHeight: "80vh"
            }
          }}
        >
          <Header>
            <h4>How Did You like the show?</h4>
            <CrossBtn onClick={closeModal}>
              <Cross />
            </CrossBtn>
          </Header>
          <Form />
        </ModalS>
      </Container>
    </ParallaxProvider>
  );
};

const Container = styled.div`
  opacity: ${props => props.loading};
  transition: all 1.25s ease-in-out;
`;

const ModalS = styled(Modal)`
  display: grid;
  width: auto;
  margin-left: 5vw;
  margin-right: 5vw;
  background-color: ${({ theme }) => theme.color.white};
  justify-self: center;
  /* align-self: center; */
  padding: 5vh;
  position: absolute;
  margin-top: 5vh;
  margin-bottom: 5vh;
  &::-webkit-scrollbar {
    display: none;
  }
  ${Media.greaterThan("medium")`
    width: max-content;
    margin-left: 0;
  margin-right: 0;
  `}
`;

const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-bottom: 5%;
  h4 {
    font-size: 1.5em;
    color: ${({ theme }) => theme.color.main};
  }
`;

const CrossBtn = styled.div`
  width: max-content;
`;

export default PageContainer;
