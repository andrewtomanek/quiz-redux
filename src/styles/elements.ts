import styled from "styled-components";

export const InputForm = styled.form`
  display: grid;
  grid-gap: 0.3rem 0.5rem;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  width:70vw;
  padding: 1rem 1.2rem;
  background-color: hsla(40, 70%, 50%, 1);  
  border-radius: 1rem;
`;

export const InputLabel = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.5rem 0.6rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
`;

export const PageLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin: 0;
  padding: 0;
  min-height: 80vh;
  overflow: hidden;
`;

export const ControlsLayout = styled.div`
  display: grid;
  grid-gap: 0.2rem 0.5rem;
  grid-auto-flow: column;
  justify-content: center;
  padding: 0.2rem 0.3rem;
`;
