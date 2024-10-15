import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() && priority) {
            addTodo(description, priority);
            setDescription('');
            setPriority('');
        }
    };

    return (
        <div className='items-card'>
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="todo-input"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="todo-select"
            >
                <option value="" disabled>
                    Priority level
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" className="todo-button">Add Todo</button>
        </form>
        </div>

    );
};

export default TodoForm;