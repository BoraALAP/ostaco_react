import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Media from "styled-media-query";

import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParallaxCache from "../../helper/ParallaxCache";

const Products = ({ information }) => {
  const { title, image, product, details, reverse } = { ...information };

  return (
    <Fade cascade duration={2500}>
      <Container reverse={reverse}>
        <ImageBox reverse={reverse}>
          <ImgPro className="Sirv" data-src={product} reverse={reverse} />
          <Parallax y={[-10, 10]}>
            <ParallaxCache />
            <Img
              reverse={reverse}
              layers={[
                {
                  image: image,
                  amount: 0.2
                }
              ]}
              style={{
                height: "500px"
              }}
            />
          </Parallax>
        </ImageBox>
        <DetailsBox reverse={reverse}>
          <div>
            <h3>{title}</h3>
          </div>
          <Details reverse={reverse}>
            <h4>Details</h4>
            <Box reverse={reverse}>
              <ul>
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <BGBox reverse={reverse} />
            </Box>
          </Details>
        </DetailsBox>
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-areas:
    "imageBox"
    "details";
  ${Media.greaterThan("medium")`
    grid-template-columns: ${props => (props.reverse ? "45% 55%" : "55% 45%")};
    grid-auto-flow: ${props => (props.reverse ? "dense" : "column")};
    grid-template-areas: ${props =>
      props.reverse ? "'details imageBox'" : "'imageBox details'"};
  `};
`;

const ImageBox = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.color.gold_bg};
  padding: 25% 10%;
  grid-area: imageBox;
  position: relative;
  z-index: -1;
  ${Media.greaterThan("medium")`
    position: relative;
    grid-auto-flow: column;`}
`;

const Img = styled(ParallaxBanner)`
  display: grid;
  position: relative;
  width: 90%;

  opacity: 1;
  align-self: center;
  ${Media.greaterThan("medium")`
    
  `};
`;

const ImgPro = styled.div`
  height: 60% !important;
  top: 20%;
  position: absolute;
  z-index: 20;

  ${Media.greaterThan("medium")`
  top: 15%;
  height: 70% !important;
    right: ${props => (props.reverse ? "auto" : "-40%")};
    left: ${props => (props.reverse ? "-40%" : "auto")};
  `}
`;

const DetailsBox = styled.div`
  display: grid;
  padding: 10%;
  align-content: center;
  grid-area: details;
  ${Media.greaterThan("medium")`
    text-align: ${props => (props.reverse ? "start" : "end")};
  `}
`;

const Details = styled.div`
  h4 {
    top: 20px;
    left: 24px;
    position: relative;
    z-index: 20;
  }

  ${Media.greaterThan("medium")`
    h4{
      ${props => (props.reverse ? "right: auto" : "right: 24px")};
      ${props => (props.reverse ? "left: 24px" : "left: auto")};
    }
  `}
`;
const Box = styled.div`
  position: relative;
  padding: 24px;
  ul {
    z-index: 10;
    position: relative;
    display: grid;

    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 8px;

      text-indent: -0.7em;
      &::before {
        background-color: ${({ theme }) => theme.color.gold};
        width: 6px;
        height: 6px;
        display: inline-block;
        content: "";
        margin-right: 1em;
        margin-bottom: 2px;
      }
    }
  }
  ${Media.greaterThan("medium")`
    ul{
      justify-items: ${props => (props.reverse ? "start" : "end")};
      li{
        direction: ${props => (props.reverse ? "ltr" : "rtl")};
        width: 90%;
        &::before{
          margin-left: ${props => (props.reverse ? "0" : "1em")};
          margin-right: ${props => (props.reverse ? "1em" : "0")};
        }
      }
    }
  `}
`;
const BGBox = styled.div`
  background-color: ${({ theme }) => theme.color.greybg};
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  left: 0;

  ${Media.greaterThan("medium")`
  ${props => (props.reverse ? "left: 0" : "left: auto")};
  ${props => (props.reverse ? "right: auto" : "right: 0")};
  width: 60%;
  `}
`;

export default Products;
