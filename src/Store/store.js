import {createStore} from 'redux';
import reducers from '../Reducers/index.js'
const Store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
console.log(Store.getState())
export default Store;