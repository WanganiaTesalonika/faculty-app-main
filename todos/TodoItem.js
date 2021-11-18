import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div>
      <input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
      
      <button onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})} className="btn btn-outline-info">X</button>
    </div>
  );
}

export default TodoItem;
