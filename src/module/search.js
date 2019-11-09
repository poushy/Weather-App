import {searchWeather} from "../network/search";
import {actionTypes} from "../reducers/search";
import {getSearchValue} from "../selector/search";
import SearchState from "../enums/SearchState";

function doSearch () {
    return (dispatch, getState) => {
        const searchValue = getSearchValue(getState());
        dispatch({
            type: actionTypes.SetLoadingState,
            item: SearchState.Loading
        });
        return searchWeather(searchValue)
            .then(resp => {
                dispatch(setResults(resp.list));
            }).catch(() => {
                dispatch(setResults([]));
            });
    }
}

function setResults (results) {
    return {
        type: actionTypes.LoadSearch,
        items: results
    }
}

function setValue (value) {
    return {
        type: actionTypes.SetValue,
        item: value
    }
}

export {
    doSearch,
    setResults,
    setValue
}