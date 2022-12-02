import './styles.css';

const NavBar = () => {
  return (
    <header className='title-bar'>
      <a className='nav-link title-bar-text' href='/'>
        Home
      </a>
      <a className='nav-link title-bar-text' href='/about'>
        About
      </a>
      <a className='nav-link title-bar-text' href='/profile'>
        My Profile
      </a>
      <a className='nav-link title-bar-text' href='/login'>
        <button className='account-button'>Ingresar/Salir</button>
      </a>
    </header>
  );
};

export default NavBar;
