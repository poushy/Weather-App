import React from 'react';
import PropTypes from 'prop-types';

const ResultDay = (props) => {
    const {
        data
    } = props;

    return (
            <div className='search-day flex-container-column'>
                <div className='font-bold'>{data.date}</div>
                <div className='flex-container-row justify-flex-center day-detail'>
                    <div className='min-temp'>
                        <label>Min:</label> {data.temp_min}
                        <span className="degree-icon"></span>C
                    </div>
                    <div className='max-temp'>
                        <label>Max:</label> {data.temp_max}
                        <span className="degree-icon"></span>C
                    </div>
                </div>
                <div className='flex-container-row justify-flex-center day-detail'>
                    <div>
                        <label>Max Wind:</label> {data.wind} mps
                    </div>
                </div>
                <div className='flex-container-row justify-flex-center day-detail'>
                    <div>
                        <label>Max Clouds:</label> {data.clouds}
                    </div>
                </div>
            </div>
    )
};

ResultDay.propTypes = {
    data: PropTypes.object.isRequired
};

export default ResultDay;