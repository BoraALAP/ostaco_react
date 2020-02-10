import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ onClick, text, type = "button" }) => {
  return onClick ? (
    <Container onClick={onClick} type={type}>
      {text}
    </Container>
  ) : (
    <Container type={type}>{text}</Container>
  );
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
