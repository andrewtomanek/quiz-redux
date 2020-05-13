import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const ResultWrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
  width: 80vw;
`;

const ResultBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: start;
`;

const ResultText = styled.p`
  margin: 0 0.5rem;
  padding: 2rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--blue);
  background-color: var(--yellow);
  border-radius: 1rem;
`;

const ResultBoard = ({ resultData, resetData }) => {
  let resultsArray = [...Object.values(resultData)];
  return (
    <ResultWrap>
      <ResultBox>
        {resultsArray.length > 0 &&
          resultsArray.map((resultItem, index) => {
            return <ResultText key={index}>{resultItem} </ResultText>;
          })}
      </ResultBox>
      <Button clicked={resetData}>Start again</Button>
    </ResultWrap>
  );
};

export default ResultBoard;
