import {connect} from 'react-redux';
import filter from '../Components/filter';
import {set_filter} from '../Actions/actionCreators';

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter: (filter) => dispatch(set_filter(filter))
    }
}

const FilterContainer = connect(undefined, mapDispatchToProps)(filter);
export default FilterContainer;