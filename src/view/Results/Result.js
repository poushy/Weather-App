import React from 'react';
import ResultDay from "./ResultDay";
import ResultTime from "./ResultTime";

const Result = (props) => {
    const {
        data
    } = props;

    return (
        <div className='search-result flex-container-row justify-flex-space-evenly'>
            <ResultDay data={data}/>
            <div className='search-time-breakdown flex-container-row justify-flex-left'>
            {data.weather.map(weather => <ResultTime weather={weather} key={weather.time}/>)}
            </div>
        </div>
    )
};

export default Result;