import '../assets/css/task-list.css'

function TaskList({ children }) {
  return (
    <ul className='task-list'>
      {children}
    </ul>
  );
}

export { TaskList };