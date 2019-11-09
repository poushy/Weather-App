import React from 'react';
import Result from "./Result";

const Results = (props) => {
    const {
        results,
        message
    } = props;

    return (
        <div className='search-results'>
            {results && results.map(data => <Result data={data} key={data.date}/>)}
            <div>{message}</div>
        </div>
    )
};

export default Results;