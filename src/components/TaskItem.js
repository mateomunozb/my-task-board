import '../assets/css/task-item.css'

function TaskItem({ text, status, description, emoji}) {
  return (
    <li className={
      `task-item ${status === 'completed' ? "task-item--completed" : 
      status === 'inProgress' ? "task-item--in-progress" : 
      status === 'wontDo' ? "task-item--wont-do" : "task-item--unstarted"} `
    }>
      <span className='task-item__emoji'>{emoji}</span>
      <div className='task-item__info'>
        <p className='task-item__text'>{text}</p>
        <span className='task-item__description'>{description}</span>
      </div>
      <div>

        {status === 'completed' ? (
            <span className='task-item__status-icon'>
              <i class="fa-solid fa-square-check"></i>
            </span> 
          ) : status === 'inProgress' ? (
            <span className='task-item__status-icon'>
              <i class="fa-solid fa-circle-half-stroke"></i>
            </span>
          ) : status === 'wontDo' ? (
            <span className='task-item__status-icon'>
              <i class="fa-solid fa-circle-xmark"></i>
            </span>
          ) : null 
        }
      </div>
      
    </li>
  );
}

export { TaskItem };