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
                <>
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
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <span>{todo.description}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;