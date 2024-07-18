import React from 'react';
import TodoList from './TodoList';
import NavBar from './Navi/NavBar';
import './Modal.css';
import '../styles.css';

const Todo = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="App">
                    <h1 className="title">Your To-do List</h1>
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default Todo;