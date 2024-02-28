import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="cards">
              <div className="card">
                <h1>Quality cleaning for your home</h1>
                <p>
                  Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                  eiusmo.
                </p>
                <div className="things">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="card-2">
                <h2>Contact us</h2>
                <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                <p>(414) 567 - 2109</p>
                <p>contact@cleaning.com</p>
              </div>

              <div className="card-3">
                <h4>Hours</h4>
                <h4>Monday to Friday</h4>
                <p>6:00 AM - 9:00 PM</p>
                <h4>Saturday & Sunday</h4>
                <p>contact@cleaning.com</p>
              </div>

              <div className="card-4">
                <h4>Get a free estimate</h4>
                <h3>(414) 567 - 2109</h3>
                <p>
                  Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                  eiusmod.
                </p>
                <button>Request a free quote</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
