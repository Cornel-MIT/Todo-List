import React from 'react';
import TodoList from './TodoList';
import './styles.css';

const Todo = () => {
    return (
        <div className="container">
            <div className="App">
                <h1 className="title">Your To-do List</h1>
                <TodoList />
            </div>
        </div>
    );
};

export default Todo;