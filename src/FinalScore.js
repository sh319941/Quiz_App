import React from 'react'

function FinalScore(props) {
    return (
        <div>
            {console.log(props.showscore)}
            {props.showscore ? ((<div className='score-section'>You scored {props.finalscore} out of {props.data.length}</div>)) 
            :(<div className='score-section'>Loading........</div>)}
        </div>
    )
}

export default FinalScore
