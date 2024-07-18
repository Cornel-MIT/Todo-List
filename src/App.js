import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Register from './components/Account/Register';
import Todo from './components/Todo';

const App = () => {
  return (
    // <BrowserRouter>
    //  <Routes>
    //    <Route path='/' element={<Login></Login>}></Route>
    //    <Route path='/Login' element={<Login></Login>}></Route>
    //    <Route path='/Register' element={<Register></Register>}></Route>
    //    <Route path='/ToDo' element={<ToDo></ToDo>}></Route>
    //  </Routes>
    // </BrowserRouter>
      // <div className="container">
      //       <div className="App">
      //           <h1 className="title">Your To-do List</h1>
      //           <TodoList />
      //       </div>
    //   </div>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ToDo' element={<Todo />} />
      </Routes>
   </BrowserRouter>
    );
};

export default App;