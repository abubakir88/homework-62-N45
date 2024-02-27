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
                <nav className="item"></nav>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
