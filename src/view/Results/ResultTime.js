import React from 'react';
import PropTypes from "prop-types";

const ResultTime = (props) => {
    const {
        weather
    } = props;

    return (
        <span className={`search-time time-${weather.class}`}>
            <div className='temp'>{weather.temp} <span className="degree-icon"></span>C</div>
            <img className='icon' src={weather.icon} title={weather.text} alt={weather.text}/>
            <div className='time'>{weather.time}</div>
        </span>
    )
};

ResultTime.propTypes = {
    weather: PropTypes.object.isRequired
};

export default ResultTime;