import React, { useContext, useEffect, useState } from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Modal from "react-modal";
import styled from "styled-components";
import Media from "styled-media-query";

import Form from "./Form";
import appContext from "../../context/context";
import Welcome2 from "./Welcome2";
import Products from "./Products";
import BottomTwo from "./BottomTwo";
import Footer from "./Footer";

import Image1 from "../../assets/image/product1img.png";
import Image2 from "../../assets/image/product2img.png";
import Cross from "../../assets/icons/cross";

const PageContainer = props => {
  const { store, dispatch } = useContext(appContext);
  const [load, setLoad] = useState(false);

  const Product1Link =
    "https://studio204.sirv.com/Window%202/Window2New.spin?fullscreen=false&zoom=0";

  const Product2Link =
    "https://studio204.sirv.com/Window%201/WindowONE.spin?fullscreen=false&zoom=0";

  const Product1 = {
    title: "Prism",
    image: Image2,
    product: Product1Link,
    details: [
      "Rated Most efficient by Energy Star",
      "Well designed space",
      "Internal steel reinforcement channel to ensure optimal",
      "Engineered for bigger openings",
      "Aiming to give that modern look, and contemporary style to any renovation or new construction"
    ],
    reverse: false
  };

  const Product2 = {
    title: "Enersense",
    image: Image1,
    product: Product2Link,
    details: [
      "Rated Most efficient by Energy Star",
      "The design and look of a traditional window made to exceed today’s standards",
      "Interior available in Cherry, Oak, Pine and Celluar PVC. Other wood species upon special request",
      "Heavy duty hinge for larger triple pane units"
    ],
    reverse: true
  };

  useEffect(() => {
    setLoad(true);
  }, []);

  const afterOpenModal = () => {};

  const closeModal = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  return (
    <ParallaxProvider>
      <Container loading={load ? "1" : "0"}>
        <Welcome2 />
        <Products information={Product1} />
        <Products information={Product2} />
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
