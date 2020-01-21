import React from "react";
import styled from "styled-components";

const InputCheckbox = props => {
  return (
    <Container>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.label}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  justify-content: start;
  user-select: none;
  align-content: center;
  position: relative;

  input[type="checkbox"] {
  }
`;

export default InputCheckbox;
