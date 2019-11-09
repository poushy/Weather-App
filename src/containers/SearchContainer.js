import {connect} from 'react-redux';
import {doSearch, setValue} from "../module/search";
import Search from "../view/Search";
import {getSearchStatus, getSearchValue} from "../selector/search";

const mapStateToProps = (state) => {
    return {
        value: getSearchValue(state),
        status: getSearchStatus(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchWeather: () => dispatch(doSearch()),
        setValue: (value) => dispatch(setValue(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);