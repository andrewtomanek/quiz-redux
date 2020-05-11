import React from 'react';
import Button from "../components/Button";


const ResultBoard = ({resultData,resetData}) => {
    
    return(
        <div >
           <p>{ resultData[0] } is { resultData[1] }  { resultData[3] } { resultData[2] }</p>.
           <Button clicked={resetData}>Start again</Button>
        </div>
    );
}

export default ResultBoard;