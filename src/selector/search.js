import SearchState from "../enums/SearchState";

const getSearchValue = (state) => state.search.value;

const convertTemp = (temp) => Math.ceil(temp - 273.15);

const getSearchData = (state) => state.search.data.reduce((map,data) => {
    const date = new Date(data.dt_txt);
    const dateString = date.toDateString();
    const temp_max = convertTemp(data.main.temp_max);
    const temp_min = convertTemp(data.main.temp_min);
    const wind = data.wind.speed;
    const time = date.getHours();
    const clouds = data.clouds.all;

    if (!map[dateString]) {
        map[dateString] = {};
        map[dateString].date = dateString;
        map[dateString].temp_max = temp_max;
        map[dateString].temp_min = temp_min;
        map[dateString].wind = wind;
        map[dateString].weather = [];
        map[dateString].clouds = clouds;
    } else {
        if (map[dateString].temp_max < temp_max) {
            map[dateString].temp_max = temp_max;
        }
        if (map[dateString].temp_min > temp_min) {
            map[dateString].temp_min = temp_min;
        }
        if (map[dateString].wind < wind) {
            map[dateString].wind = wind;
        }
        if (map[dateString].clouds < clouds) {
            map[dateString].clouds = clouds;
        }
    }

    map[dateString].weather.push({
        class: time < 9 ? 'dawn' : time < 17 ? 'day' : 'night',
        text: `${data.weather[0].main} - ${data.weather[0].description}`,
        time: `${time}:00`,
        cloud: data.clouds.all,
        temp: convertTemp(data.main.temp),
        temp_min: convertTemp(data.main.temp_min),
        temp_max: convertTemp(data.main.temp_max),
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    });
    return map;
}, {});

const getSearchStatus = (state) => state.search.status;

const getMessage = (state) => {
    const status = state.search.status;
    const results = state.search.data;

    if (status === SearchState.NotLoaded) {
        return 'Search for the weather of any City or Country';
    } else if (status === SearchState.Loading) {
        return 'Loading search results...'
    } else if (results.length === 0 && status === SearchState.Loaded) {
        return 'No Results found for this search!'
    }
    return '';
};

export {
    getSearchValue,
    getSearchData,
    getSearchStatus,
    getMessage
}
