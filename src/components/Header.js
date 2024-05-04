import '../assets/css/header.css';

function Header() {
  return (
    <div className='header'>
      <i className="header__icon fa-solid fa-layer-group"></i>
      <div>
        <h1 className='header__title'>My task Board</h1>
        <p className='header__description'>Tasks to keep organised</p>
      </div>
    </div>
  );
}

export { Header };