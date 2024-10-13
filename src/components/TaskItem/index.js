import './task-item.css'
import { TaskIcon } from '../TaskIcon';

const iconByStatus = {
  'completed': <TaskIcon type="done" color="green" size="25"/>,
  'inProgress':  <TaskIcon type="progress"/>,
};

function TaskItem(props) {
  return (
    <li
      onMouseEnter={() => props.setShowOptions(props.index)}
      onMouseLeave={() => props.setShowOptions(null)}
      className={
        `task-item ${props.status === 'completed' ? "task-item--completed" : 
        props.status === 'inProgress' ? "task-item--in-progress" : "task-item--unstarted"} `
      }
    >
      <span className='task-item__icon'><TaskIcon type={props.icon}/></span>
      <div className='task-item__info'>
        <p className='task-item__text'>{props.text}</p>
        <span className='task-item__description'>{props.description}</span>
      </div>
        {props.showOptions === props.index ? 
          <div className="task-item__options">
            <span onClick={props.inProgress}>H</span>
            <span onClick={props.onComplete}>V</span>
            <span onClick={props.onDelete}>X</span>
          </div>
          : null
        } 
        {iconByStatus[props.status]}
    </li>
  );
}

export { TaskItem };