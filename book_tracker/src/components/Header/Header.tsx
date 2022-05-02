import './Header.css';

function Header() {
  // Basic header component
  return (
    <header>
      <div className="header-logo">
        <h1>Library</h1>
        <img className="header-logo-gif" src={require('../../assets/book.gif')} alt="book" />
      </div>
      <div className="header-link">
        <a href="https://github.com/RLewis11769" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original" />
          {' '}
          Star
        </a>
      </div>
    </header>
  );
}

export default Header;
