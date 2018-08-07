import {connect} from 'react-redux';
import { complete_todo, remove_todo } from '../Actions/actionCreators'
import todo from '../Components/todo'
const getFilters = (todos, filter) => {
    switch (filter) {
        case 'visible_all':
            return todos;
        case 'visible_active':
            return todos.filter((item) => item.completed===false);
        case 'visible_completed':
            return todos.filter((item) => item.completed===true);
    }
}

const mapStateToProps = (state) => {
    return{
        todos: getFilters(state.todo, state.filter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        remove_todo: (id) => {
            dispatch(remove_todo(id))
        },
        complete_todo: (id) => {
            dispatch(complete_todo(id))
        }
    }
}
const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(todo);
export default TodoContainer;