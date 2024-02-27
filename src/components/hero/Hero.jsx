import "./Hero.scss";

function Hero() {
  return (
    <>
      <section className="hero">
        {/* <div className="container"> */}
        <div className="hero-content">
          <div className="hero-texts">
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="contact">
              <button> Get a free quote</button>
            </div>
          </div>
          <div className="hero-img">
            <img src="/images/hero-img.png" alt="" />
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Hero;
