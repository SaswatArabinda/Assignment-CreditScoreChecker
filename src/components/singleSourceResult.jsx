import React from 'react';

export const SingleSourceResult = (props) => {
    debugger
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-score">Score: {props.score}</h1>
                {/* <p className="lead">Score:</p> */}
            </div>
        </div>

    )
}