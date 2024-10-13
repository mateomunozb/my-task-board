import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', status: 'completed', description: 'Enter a short description', icon: 'clean' },
//   { text: 'Tomar el curso de introduccion a React.js', description: 'Enter a short', status: 'inProgress', icon: 'sport' },
//   { text: 'Llorar con la llorona', status: 'completed', description: 'Enter a short description', icon: 'study' },
//   { text: 'LAALALAALALA', description: 'Enter a short', status: '', icon: 'word' },
//   { text: 'LAALALAALALA', description: 'Enter a short', status: '', icon: 'fun' },
// ];

// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TASKS_V1');

function App() {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [showOptions, setShowOptions] = React.useState(null);

  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const changeTaskStatus = (taskIndex, status) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].status = status;
    saveTasks(newTasks);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <AppUI
      completedTasks={completedTasks} 
      totalTasks={ totalTasks} 
      searchValue={ searchValue} 
      setSearchValue={ setSearchValue}
      searchedTasks={ searchedTasks}  
      setShowOptions={setShowOptions}
      showOptions={showOptions}
      changeTaskStatus={changeTaskStatus}
      deleteTask={deleteTask}
    />
  );
}

export default App;
