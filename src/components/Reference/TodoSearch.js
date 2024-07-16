import React from 'react';

const TodoSearch = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={e => onSearch(e.target.value)}
      placeholder="Search Tasks"
    />
  );
};

export default TodoSearch;
