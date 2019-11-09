import {connect} from 'react-redux';
import Results from "../view/Results/Results";
import {getSearchData, getMessage} from "../selector/search";

const mapStateToProps = (state) => {
    return {
        results: Object.values(getSearchData(state)),
        message: getMessage(state)
    };
};

export default connect(mapStateToProps)(Results);