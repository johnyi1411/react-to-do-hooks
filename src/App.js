import React, { useState } from 'react';
import './App.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <input className='input' type='text' value={value} onChange={(e) => setValue(e.target.value)}></input>
      </form>
  );
};

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo' key={index} index={index}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Have lunch with friend',
      isCompleted: false,
    },
    {
      text: 'Create awesome todos app',
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            key={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
};

export default App;