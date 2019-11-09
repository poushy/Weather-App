import fetchJsonp from 'fetch-jsonp';
const api = 'https://api.openweathermap.org/data/2.5/forecast?';
const apiKey = '8f5d43912bba526c6b61e07ce6aa0353';

function searchWeather(searchValue) {
    return fetchJsonp(`${api}q=${searchValue}&appid=${apiKey}`)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            return json;
        }).catch(function(error) {
            console.log('Error retrieving data', error)
        });
}

export {
    searchWeather
}