import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';


const rootReducer = combineReducers({
    todos: todosReducer, // teas slice of state, managed by teasReducer
});

export default rootReducer;