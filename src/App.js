import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import ToDo from './ToDo.js';
import React, {useState, useEffect} from 'react';
import TodoList from './components/Reference/TodoList.js';
import TodoAlert from './components/Reference/TodoAlert.js';
import { Alert } from 'bootstrap';
import { CiTextAlignCenter } from 'react-icons/ci';


function App() {
   const [name, setName] = useState('');
   const [list, setList] = useState([]);
   const [isEditing, setEditing] = useState(false);
   const [editId, setEditId] = useState(null);
   const [alert, setAlert] = useState({show: false, message: '', type: ''});
   
   
   const handleSubmit = (e) => {
    e.preventDefault();
  if(!name) {
     showAlert(true, 'danger', 'Please Enter Value');
    } 
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item, title: name}
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setEditing(false);
      showAlert(true, "success", "value Changes");
    } else {
      showAlert(true,"success","Item Added to the List");
      const newItem = {id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }};
   const showAlert = () => {
    //setAlert({show,type,message});
   };
   const removeItem = () => {};
   const editItem = () => {};
   const clearList = () => {};


  return (
    // <BrowserRouter>
    //  <Routes>
    //    <Route path='/' element={<Login></Login>}></Route>
    //    <Route path='/Login' element={<Login></Login>}></Route>
    //    <Route path='/Register' element={<Register></Register>}></Route>
    //    <Route path='/ToDo' element={<ToDo></ToDo>}></Route>
    //  </Routes>
    // </BrowserRouter>

    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert} list={list}/>}
        <h3 style={{marginBottom: " 1.5rem" , textAlign: "center"}}>
          Your To do List
        </h3>
        <div className='mb-3 form'>
          <input
          type='text'
          className='form-control'
          placeholder='eg. Bread'
          onChange={(e) => setName(e.target.value)}
          value={name}>
          </input>
          <button type='submit' className='btn btn-success'>
            {isEditing ? "Edit" : "Submit"}
          </button>
    
        </div>
      </form>
      {list.length > 0 && (
        <div style={{marginTop: '2rem'}}>
          <list items={list} removeItem={removeItem} editItem={editItem} />
          <div className='text-center'>
             <button className='btn btn-warning' onClick={clearList}>
              Clear Item
              </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
// import TodoSearch from './components/TodoSearch';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [todoToEdit, setTodoToEdit] = useState(null);

//   const addTodo = todo => {
//     setTodos([...todos, todo]);
//   };

//   const deleteTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const editTodo = updatedTodo => {
//     setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
//     setTodoToEdit(null);
//   };

//   const handleEdit = id => {
//     const todo = todos.find(todo => todo.id === id);
//     setTodoToEdit(todo);
//   };

//   const filteredTodos = todos.filter(todo =>
//     todo.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
//       <TodoForm addTodo={addTodo} editTodo={editTodo} todoToEdit={todoToEdit} />
//       <TodoList todos={filteredTodos} onDelete={deleteTodo} onEdit={handleEdit} />
//     </div>
//   );
// };

// export default App;
