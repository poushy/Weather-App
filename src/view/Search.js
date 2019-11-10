import React from 'react';
import PropTypes from 'prop-types';

const onKeyPress = (searchWeather) => (event) => {
    if (event.charCode === 13 || event.keyCode === 13) {
        searchWeather();
    }
};

const Search = (props) => {
    const {
        value,
        searchWeather,
        setValue
    } = props;

    return (
        <div className='search-bar justify-flex-center'>
            <input value={value}
                   onKeyPress={onKeyPress(searchWeather)}
                   onChange={(event)=> setValue(event.target.value)}
                   placeholder={'Search by City and Country for e.g. Vancouver,CA'}/>
            <div className="search-bar-buttons App flex-container-row">
                <div className="icon search-icon align-center" onClick={searchWeather}></div>
                <div className="icon remove-icon align-center" onClick={() => setValue('')}></div>
            </div>
        </div>
    )
};

Search.propTypes = {
    value: PropTypes.string.isRequired,
    searchWeather: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired
};

export default Search;