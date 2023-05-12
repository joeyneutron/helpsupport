import '../css/App.css'
import logo from '../images/logo.png';

function Header() {
  return (
    <div className='header'>
      <img className='headerImg'
      src={logo} alt="Logo"
      />
      <div className="title">
        <h1>How Can We Help?</h1>
      </div>
    </div>
  );
}

export default Header;