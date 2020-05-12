import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
`;

const TextField = styled.p`
  margin: 0;
  padding: 1rem 1rem;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  color: var(--blue);
  background-color: var(--orange);
`;

const Header = () => {
  return (
    <TextBox>
      <TextField>Build a sentence game</TextField>
    </TextBox>
  );
};

export default Header;
