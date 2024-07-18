import React, { useState } from 'react';
import Modal from './Modal';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(todo.description);
    const [newPriority, setNewPriority] = useState(todo.priority);

    const handleUpdate = () => {
        updateTodo(todo.id, newDescription, newPriority);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.priority.toLowerCase()}`}>
            <div className="view-form">
                <span>{todo.description}</span>
                <div className="button-group">
                    <button className='edit-btn' onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                    <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                onSave={handleUpdate}
                description={newDescription}
                setDescription={setNewDescription}
                priority={newPriority}
                setPriority={setNewPriority}
            />
        </div>
    );
};

export default TodoItem;