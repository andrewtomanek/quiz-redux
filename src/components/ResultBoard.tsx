import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { ResultData } from "../store/reducers/quizReducer";


const ResultWrap = styled.div`
  display: grid;
  grid-gap: 1.2rem 1.5rem;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
  background-color:hsla(40, 70%, 50%, 1)
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
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--blue);
  background-color: var(--yellow);
  border-radius: 1rem;
`;

type Props = {
  resultData: ResultData;
  resetData: () => void;
};

const ResultBoard = ({ resultData, resetData }:Props) => {
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
