import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';

const defaultTodos = [
  { text: 'Cortar cebolla', status: 'completed', description: 'Enter a short description', icon: 'clean' },
  { text: 'Tomar el curso de introduccion a React.js', description: 'Enter a short', status: 'inProgress', icon: 'sport' },
  { text: 'Llorar con la llorona', status: 'completed', description: 'Enter a short description', icon: 'study' },
  { text: 'LAALALAALALA', description: 'Enter a short', status: '', icon: 'word' },
  { text: 'LAALALAALALA', description: 'Enter a short', status: '', icon: 'fun' },
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [showOptions, setShowOptions] = React.useState(null);

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const changeTodoStatus = (todoIndex, status) => {
    const newTodos = [...tasks];
    newTodos[todoIndex].status = status;
    setTasks(newTodos);
  };

  const deleteTodo = (todoIndex, status) => {
    const newTodos = [...tasks];
    newTodos.splice(todoIndex, 1);
    setTasks(newTodos);
  };

  return (
    <>
      <Header completed={completedTasks} total={totalTasks} />
      <SearchBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList>
        {searchedTasks.map((todo, i) => (
          <TaskItem
            setShowOptions={setShowOptions}
            showOptions={showOptions}
            index={i} 
            key={i} 
            icon={todo.icon} 
            text={todo.text} 
            status={todo.status} 
            description={todo.description}
            onComplete={() => changeTodoStatus(i, 'completed')}
            inProgress={() => changeTodoStatus(i, 'inProgress')}
            onDelete={() => deleteTodo(i)}
          />
        ))}
      </TaskList>
      
      <CreateTaskButton />
    </>
  );
}

export default App;
