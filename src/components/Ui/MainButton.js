import React from "react";
import styled from "styled-components";

import Arrow from "../../assets/arrow";

const MainButton = props => {
  return (
    <Container onClick={props.onClick}>
      <span>{props.children}</span>
      <Arrow />
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.color.white};
  justify-self: center;
  width: fit-content;
  padding: 1em 5%;
  border: none;
  justify-content: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5em;
  align-items: center;
  text-align: left;
  span {
    display: grid;
    color: ${({ theme }) => theme.color.main};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-family: ${({ theme }) => theme.font.family.header};
    font-size: 1em;
    width: 100%;
  }
`;

export default MainButton;
