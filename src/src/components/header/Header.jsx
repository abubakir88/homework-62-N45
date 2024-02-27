import "./Header.css";

function Header() {
  return (
    <div className="container">
      <header>
        <div className="head-all">
          <img className="head-img" src="/images/header-img.png" alt="" />
          <div className="head-ahref">
            <a href="#sec-1">Home</a>
            <a href="#sec-2">About</a>
            <a href="#sec-3">Services</a>
            <div className="head-a">
              <a href="#sec-4">Articles</a>
              <a href="#sec-1">Contact</a>
            </div>
          </div>
          <div className="head-butt">
            <p>Cart(0)</p>
            <button className="head-but">Get a free quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
