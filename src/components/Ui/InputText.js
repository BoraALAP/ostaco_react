import React from "react";
import styled from "styled-components";

const InputText = props => {
  return (
    <Container htmlFor={props.name}>
      <h6>{props.label}</h6>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        defaultValue={props.value}
        placeholder={props.placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.gold};
    padding: 16px;
    &::placeholder {
      color: ${({ theme }) => theme.color.midgrey};
    }
  }
`;

export default InputText;
