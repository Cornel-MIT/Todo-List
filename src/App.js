import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Register from './components/Account/Register';
import Todo from './components/Todo';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ToDo' element={<Todo />} />
      </Routes>
   </BrowserRouter>
    );
};

export default App;