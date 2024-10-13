import './header.css';
import { TaskIcon } from '../TaskIcon';

function Header({total, completed}) {
  return (
    <div className="header">
      <div className="header__principal">
        <TaskIcon type="header"/>
        <h1 className='header__title'>My task Board</h1>
      </div>
      <p className='header__description'>
        {completed === total ?
          <span>All your tasks have been completed. <strong>Congratulations!</strong></span>
          :
          <span>
            <span className='header__number'></span> 
            {completed} task completed of {total}
            <span className='header__number'></span>
          </span>
        }
      </p>
    </div>
  );
}

export { Header };