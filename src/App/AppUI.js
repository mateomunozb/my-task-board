import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { CreateTaskButton } from '../components/CreateTaskButton';

function AppUI({
  completedTasks, 
  totalTasks, 
  searchValue, 
  setSearchValue,
  searchedTasks,  
  setShowOptions,
  showOptions,
  changeTaskStatus,
  deleteTask,
}) {
  return (
    <>
      <Header completed={completedTasks} total={totalTasks} />
      <SearchBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList>
        {searchedTasks.map((task, i) => (
          <TaskItem
            setShowOptions={setShowOptions}
            showOptions={showOptions}
            index={i} 
            key={i} 
            icon={task.icon} 
            text={task.text} 
            status={task.status} 
            description={task.description}
            onComplete={() => changeTaskStatus(i, 'completed')}
            inProgress={() => changeTaskStatus(i, 'inProgress')}
            onDelete={() => deleteTask(i)}
          />
        ))}
      </TaskList>
      
      <CreateTaskButton />
    </>
  )
}

export { AppUI };
