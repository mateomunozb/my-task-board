import '../assets/css/header.css';

function Header({total, completed}) {
  return (
    <div className='header'>
      <i className="header__icon fa-solid fa-layer-group"></i>
      <div>
        <h1 className='header__title'>My task Board</h1>
        <p className='header__description'>
          <span className='header__number'></span> 
          {completed} task completed of {total}
          <span className='header__number'></span> 
        </p>
      </div>
    </div>
  );
}

export { Header };