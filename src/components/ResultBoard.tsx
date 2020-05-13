import React from "react";
import Button from "../components/Button";
import styled, { keyframes } from 'styled-components';
import { ResultData } from "../store/reducers/quizReducer";

const ResultWrap = styled.div`
  display: grid;
  grid-gap: 1.2rem 1.5rem;
  grid-auto-flow: row;
  align-content: space-between;
  justify-content: center;
  width: 80vw;
`;

const ResultBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: start;
`;

export const textAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.5) rotate(3deg);
    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
      0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }

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
  animation: ${textAnimation} 1500ms ease-in-out;

`;


type Props = {
  resultData: ResultData;
  resetData: () => void;
};

const ResultBoard = ({ resultData, resetData }: Props) => {
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
