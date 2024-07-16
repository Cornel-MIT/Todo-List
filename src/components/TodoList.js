import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (description, priority) => {
        const newTodo = {
            id: Date.now(),
            description,
            priority,
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id, description, priority) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, description, priority } : todo
            )
        );
    };

    const filteredTodos = todos.filter((todo) =>
        todo.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <input
                type="text"
                placeholder="Search todos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredTodos.map((todo) => (
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
