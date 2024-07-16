import React, { useEffect } from 'react'

const TodoAlert = ({type, message, removeAlert, list}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000)
        return () => clearTimeout(timeout);
    }, [list]);
    
  return <p className={'alert alert-${type}'}>{message}</p>
}; 

export default TodoAlert