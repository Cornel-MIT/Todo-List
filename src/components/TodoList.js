import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    // State to store todos
    const [todos, setTodos] = useState([]);
    // State for search input
    const [search, setSearch] = useState('');

    // Fetch todos from the server when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    // Add a new todo
    const addTodo = (description, priority) => {
        const newTodo = {
            id: Date.now(),
            description,
            priority,
        };
        setTodos([...todos, newTodo]);

        // Save new todo to the server
        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        }).catch(error => console.error('Error adding todo:', error));
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));

        // Delete todo from the server
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE',
        }).catch(error => console.error('Error deleting todo:', error));
    };

    // Update an existing todo
    const updateTodo = (id, description, priority) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, description, priority } : todo
        );
        setTodos(updatedTodos);

        // Find the updated todo
        const updatedTodo = updatedTodos.find(todo => todo.id === id);
        // Save updated todo to the server
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        }).catch(error => console.error('Error updating todo:', error));
    };

    // Filter todos based on search input
    const filteredTodos = todos.filter(todo =>
        todo.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <input
                type="text"
                placeholder="Search For An Item"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
