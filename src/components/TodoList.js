import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:3002/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    const addTodo = (description, priority) => {
        const newTodo = {
            description,
            priority,
        };
        fetch('http://localhost:3002/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        })
        .then(response => response.json())
        .then(data => setTodos([...todos, data]))
        .catch(error => console.error('Error adding todo:', error));
    };

    const deleteTodo = (id) => {
        fetch(`http://localhost:3002/todos/${id}`, {
            method: 'DELETE',
        })
        .then(() => setTodos(todos.filter(todo => todo.id !== id)))
        .catch(error => console.error('Error deleting todo:', error));
    };

    const updateTodo = (id, description, priority) => {
        const updatedTodo = {
            id,
            description,
            priority,
        };
        fetch(`http://localhost:3002/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        })
        .then(response => response.json())
        .then(data => {
            const updatedTodos = todos.map(todo =>
                todo.id === id ? data : todo
            );
            setTodos(updatedTodos);
        })
        .catch(error => console.error('Error updating todo:', error));
    };

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
