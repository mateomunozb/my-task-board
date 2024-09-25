import '../assets/css/create-task-button.css'

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
      <i className="create-task-button__icon  fa-solid fa-plus"></i>
    </button>
  );
}

export { CreateTaskButton };