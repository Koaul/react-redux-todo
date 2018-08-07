import form from '../Components/form'
import {connect} from 'react-redux'
import {add_todo} from '../Actions/actionCreators'
const mapDispatchToProps = (dispatch) => {
    return{
        add_todo: (text) => {
            dispatch(add_todo(text));
        },
        
    }
}

const FormContainer = connect(undefined, mapDispatchToProps)(form)
export default FormContainer;
