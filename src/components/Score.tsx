import React from 'react';

const score = (props) => {
    
    return(
        <div >
           <p>You have Answered <span>{ props.score }</span> out of 4 Questions Correctly</p>.
        </div>
    );
}

export default score;