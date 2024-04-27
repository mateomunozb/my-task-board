import '../assets/css/Header.css';

function Header() {
  return (
    <div className='header'>
      <i className="fa-solid fa-layer-group"></i>
      <div>
        <h1>My task Board</h1>
        <p>Tasks to keep organised</p>
      </div>
    </div>
  );
}

export { Header };