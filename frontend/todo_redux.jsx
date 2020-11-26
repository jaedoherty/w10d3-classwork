import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js';
import configureStore from './store/store.js' 

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store; //remove later
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const root =  document.getElementById('root');
    ReactDOM.render(<h1>Todos App</h1>, root)
});