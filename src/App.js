import React from 'react';
import { Header } from './components/Header';
// import { Header } from '@/components/Header';
// import { TodoSearch } from './TodoSearch';
// import { TodoList } from './TodoList';
// import { TodoItem } from './TodoItem';
// import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introduccion a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LAALALAALALA', completed: true }
// ];

function App() {
  return (
    <>
      <Header completed={16} total={25}/>
      {/* <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, i) => (
          <TodoItem key={i} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      
      <CreateTodoButton /> */}
    </>
  );
}

export default App;
