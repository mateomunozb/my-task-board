import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';

const defaultTodos = [
  { text: 'Cortar cebolla', status: 'completed', description: 'Enter a short description', emoji: '⏰' },
  { text: 'Tomar el curso de introduccion a React.js', status: 'inProgress', emoji: '🏋️‍♀️' },
  { text: 'Llorar con la llorona', status: 'wontDo', description: 'Enter a short description', emoji: '☕' },
  { text: 'LAALALAALALA', status: '', emoji: '📚' }
];

function App() {
  return (
    <>
      <Header />
      <SearchBar />

      <TaskList>
        {defaultTodos.map((todo, i) => (
          <TaskItem key={i} emoji={todo.emoji} text={todo.text} status={todo.status} description={todo.description}/>
        ))}
      </TaskList>
      
      <CreateTaskButton />
    </>
  );
}

export default App;
