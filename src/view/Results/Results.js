import React from 'react';
import PropTypes from 'prop-types';
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

Results.propTypes = {
    results: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired
};

export default Results;