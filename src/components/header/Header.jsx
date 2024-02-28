import "./Header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="left-nav">
              <a href="#" className="logo">
                <img src="/images/website-logo.svg" alt="logo" />
              </a>
              <div className="nav-items">
                <a className="nav-item" href="#home">
                  Home
                </a>
                <a className="nav-item" href="#about">
                  About
                </a>
                <a className="nav-item" href="#our">
                  Services
                </a>
                <a className="nav-item" href="#Articles">
                  Articles
                </a>
                <a className="nav-item" href="contact">
                  Contact
                </a>
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
