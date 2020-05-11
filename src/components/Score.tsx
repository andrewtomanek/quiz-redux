import React from 'react';

const score = ({score}) => {
    
    return(
        <div >
           <p>{ score[0] } is { score[1] } on his { score[3] } { score[2] }</p>.
        </div>
    );
}

export default score;