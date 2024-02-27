import "./Hero.scss";

function Hero() {
  return (
    <div className="container">
      <section id="sec-1" className="sec-1">
        <div className="sec-1-all">
          <div className="sec1-mini1">
            <h1 className="mini1-h1">Quality cleaning for your home</h1>
            <p className="mini1-p">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="vmeste-buts">
              <button>Get a free quote</button>
              <div className="vmeste-buts-1">
                <img src="images/sec1-tel.png" alt="" />
                <div className="vmeste-buts-2">
                  <p>Call us now</p>
                  <h2>(414) 567 - 2109</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sec1-mini2">
            <img src="/images/sec1-women.png" alt="" />
          </div>
        </div>
      </section>
      <section id="sec-2" className="sec-2">
        <div className="sec-2-all">
          <h1 className="sec2-h1">About Us</h1>
          <p className="sec2-p">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
          <div className="sec2-cards">
            <div className="sec2-card">
              <img src="/images/sec2-card1.png" alt="" />
              <h3 className="card-h">1. Schedule online</h3>
              <p className="card-p">
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
            <div className="sec2-card">
              <img src="/images/sec2-card2.png" alt="" />
              <h3 className="card-h">2. Pay online easily</h3>
              <p className="card-p">
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
            <div className="sec2-card">
              <img src="/images/sec2-card3.png" alt="" />
              <h3 className="card-h">3. Get your house cleaned</h3>
              <p className="card-p">
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
          <div className="sec2-buts">
            <button>Get a free quote</button>
            <button>Explore services</button>
          </div>
        </div>
      </section>
      <section id="sec-3" className="sec-3">
        <div className="sec-3-all">
          <div className="sec3-nav">
            <h1 className="sec3-nav-h">Our Services</h1>
            <button className="sec3-nav-but">Explore services</button>
          </div>
          <div className="sec3-cards">
            <div className="sec3-card">
              <img src="/images/sec3-card.png" alt="" />
              <h2 className="sec3-card-h">House cleaning</h2>
              <p className="sec3-card-p">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="sec3-card2">
              <img src="/images/sec3-card2.png" alt="" />
              <h2 className="sec3-card-h">Office cleaning</h2>
              <p className="sec3-card-p">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="sec3-card3">
              <img src="/images/sec3-card3.png" alt="" />
              <h2 className="sec3-card-h">Industrial cleaning</h2>
              <p className="sec3-card-p">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className="FRAME">
            <img src="/images/sec3-frame.png" alt="" />
          </div>
        </div>
      </section>
      <section id="sec-4" className="sec-4">
        <div className="sec-4-all">
          <div className="sec4-nav">
            <h1 className="sec4-nav-h">Articles & resources</h1>
            <div className="sec4-nav-buts">
              <button>Get a free quote</button>
              <button>Browse articles</button>
            </div>
          </div>
          <div className="sec4-cards">
            <div className="sec4-card">
              <img src="/images/sec4-card1.png" alt="" />
              <div className="sec4-mini-card">
                <h2 className="sec4-card-h">
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h2>
                <p className="sec4-card-p">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <h3>Jan 28, 2022</h3>
              </div>
            </div>
            <div className="sec4-card">
              <img src="/images/sec4-card2.png" alt="" />
              <div className="sec4-mini-card">
                <h2 className="sec4-card-h">
                  How to properly disinfect your phone and other electronics
                </h2>
                <p className="sec4-card-p">
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <h3>Feb 1, 2022</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
