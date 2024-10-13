import './create-task-button.css'
import { TaskIcon } from '../TaskIcon';

function CreateTaskButton() {
  return (
    <button 
      className="create-task-button"
      onClick={
        (event) => {
          console.log('le diste al boton');
          console.log(event);
          console.log(event.target);
        }
      }
    >
      <TaskIcon type="add"/>
    </button>
  );
}

export { CreateTaskButton };