import {legacy_createStore} from 'redux';
// import  rootReducer from './reducers/index'
import todosReducer  from './reducers/TodoReducer'

const store = legacy_createStore(todosReducer);

export default store;