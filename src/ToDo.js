import React, { useState } from 'react'

const ToDo = (props) => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
  }

  return (
    <div className='main-form'>
      <h2>What would you like to Do today ?</h2>
         
    </div>
    
  )
}

export default ToDo