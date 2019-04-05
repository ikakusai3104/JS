import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {creatStore} from 'redux';

const initialState = {
    tasks:[]
};

const addTask = (task) => ({
    type:'ADD_TASK',
    payload:{
        task
    }
})

function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ TASK':
            return{
                ...state,
                tasks: state.tasks.concat([action.tasks])
            };
        default:
            return state;
    }
};

const store = creatStore(tasksReducer);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
