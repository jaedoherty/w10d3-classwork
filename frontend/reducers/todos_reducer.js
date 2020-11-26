import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
// const initialState = {
//     1: {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// };


const todosReducer = (state = {}, action) => {
    // helps prevent us from accidently mutating state
    Object.freeze(state);

    // this does not mutate original state, nextState has new objectId
    let nextState = Object.assign({}, state); // creates shallow copy of state
    // let nextState = {...state}; fancy

    switch (action.type) {
        case RECEIVE_TODO:
            // this only mutates nextState
            // debugger
            nextState[action.todo.id] = action.todo; // adds a key of whatever action.tea.id is
            return nextState;
        case RECEIVE_TODOS:
            // this only mutates nextState
            nextState = action.todos; // adds a key of whatever action.tea.id is
            return nextState;
        default:
            return state;
    }
}

// {
//     54398: { flavor: 'hoji cha', amount: 5, id: 54398},
//     2: { flavor: 'another tea', amount: 3, id: 2}
// }

export default todosReducer;