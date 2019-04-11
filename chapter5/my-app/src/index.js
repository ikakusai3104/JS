import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, replaceReducer} from 'redux';

const initialState = {
    task:'',
    tasks:[]
};

// function addReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return{
//                 ...state,
//                 tasks:state.tasks.concat([action.payload.task])
//             };
//         default:
//             return state;
//     }
// }

// function resetReducer(state = initialState, action){
//     switch(action.type){
//         case 'RESET_TASK':
//         return{
//             ...state,
//             tasks:[]
//         };
//     default:
//         return state;
//     }
// }

function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}

function TodoApp({store}){
    const{ task, tasks } = store.getState();
    return (
    <div>
        <input type="text" onChange ={(e) => store.dispatch(inputTask(e.target.value))}/>
        <input type="button" value="add" onClick={() => store.dispatch(addTask(task))}/>
        <ul>
        {
            tasks.map(function( item, i){
                return(
                    <li key ={i}>{item}</li>
                );
            })
        }
        </ul>
    </div>
    );
}

const store = createStore(resetReducer);

function handleChange(){
    console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange)
//unsubscribe()を実行すると解除される

const addTask = (task) => ({
    type:'ADD_TASK',
    payload:{
        task
    }
})

const resetTask = (task) => ({
    type: 'RESET_TASK',
    payload:{
        task
    }
})

const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
})

store.dispatch(resetTask('Reducerを学ぶ'));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
