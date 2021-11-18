import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    
    <div>
      <h1 className="container d-flex justify-content-center align-items-center bg-secondary p-2 text-white bg-opacity-25">Simple Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button  type="Submit" className="btn btn-outline-info">Add Todo</button>
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
      <p class="container d-flex justify-content-center align-items-center text-white-50 bg-secondary p-2 text-white ">Wangania,Tesalonika 'Web Programming'</p>
    </div>
    
  );
}

export default Todos;
