import SearchState from "../enums/SearchState";

export const actionTypes = {
    'LoadSearch': 'LOAD_SEARCH',
    'SetLoadingState': 'SET_LOADING_STATE',
    'SetValue': 'SET_VALUE'
};

const InitialState = {
    value: '',
    data: [],
    status: SearchState.NotLoaded
};

export default function reducer (state = InitialState, action) {
    switch (action.type) {
        case actionTypes.LoadSearch:
            return {
                ...state,
                data: action.items,
                status: SearchState.Loaded
            };
        case actionTypes.SetLoadingState:
            return {
                ...state,
                status: action.item
            };
        case actionTypes.SetValue:
            return {
                ...state,
                data: [],
                value: action.item,
                status: SearchState.NotLoaded
            };
        default:
            return state;
    }
}