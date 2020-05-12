import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const ResultBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
`;

const ResultText = styled.p`
  margin: 0;
  padding: 1rem 1rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: var(--blue);
background-color: var(--yellow);
border-radius: 1rem;
`;

const ResultBoard = ({ resultData, resetData }) => {
  return (
    <ResultBox>
      <ResultText>
        {resultData[0]} is {resultData[1]} {resultData[3]} {resultData[2]}
      </ResultText>
      .<Button clicked={resetData}>Start again</Button>
    </ResultBox>
  );
};

export default ResultBoard;
