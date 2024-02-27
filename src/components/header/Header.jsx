import "./Header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="left-nav">
              <a href="#" className="logo">
                <img src="/images/website-logo.png" alt="logo" />
              </a>
              <div className="nav-items">
                <a className="nav-item">Home</a>
                <a className="nav-item">About</a>
                <a className="nav-item">Services</a>
                <a className="nav-item">Articles</a>
                <a className="nav-item">Contact</a>
              </div>
            </div>
            <div className="right-nav">
              <a href="#">Cart(0)</a>
              <button>Get a free quote</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
