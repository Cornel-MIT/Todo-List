import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, todoToEdit }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (todoToEdit) {
      setDescription(todoToEdit.description);
      setPriority(todoToEdit.priority);
      setIsEditing(true);
    }
  }, [todoToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      editTodo({
        id: todoToEdit.id,
        description,
        priority
      });
    } else {
      addTodo({
        id: new Date().getTime().toString(),
        description,
        priority
      });
    }
    setDescription('');
    setPriority('Medium');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">{isEditing ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TodoForm;
