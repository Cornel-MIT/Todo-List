import { useState } from 'react';

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
            {isEditing ? (
                <div className="edit-form">
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <select
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button className="save-btn" onClick={handleUpdate}>
                        Save
                    </button>
                </div>
            ) : (
                <div className="view-form">
                    <span>{todo.description}</span>
                    <div className="button-group">
                        <button className='edit-btn' onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>
                            Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoItem;