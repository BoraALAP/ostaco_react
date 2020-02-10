import React from "react";
import styled from "styled-components";

const SecondaryButton = ({ onClick, text, type = "button" }) => {
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
  color: ${({ theme }) => theme.color.main};
  border: 1px solid ${({ theme }) => theme.color.gold};
  background-color: transparent;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 0.875em;
`;

export default SecondaryButton;
