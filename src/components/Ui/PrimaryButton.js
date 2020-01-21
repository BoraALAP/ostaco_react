import React from "react";
import styled from "styled-components";

const PrimaryButton = props => {
  return <Container>{props.text}</Container>;
};

const Container = styled.button`
  padding: 16px;
  justify-content: center;
  align-content: center;
  color: ${({ theme }) => theme.color.gold};
  background-color: ${({ theme }) => theme.color.main};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 0.875em;
  border: none;
`;

export default PrimaryButton;
