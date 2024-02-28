import "./Articles.scss";

function Articles() {
  return (
    <>
      <section className="Articles" id="Articles">
        <div className="container">
          <div className="Articles-content">
            <div className="title">
              <h1>Articles & resources</h1>
              <div className="title-btns">
                <button>Get a free quote</button>
                <button>Browse articles</button>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <img src="/images/Articles-card-1.png" alt="Articles-card-1" />
                <div className="card-texts">
                  <h2>
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="data">
                    <p>Jan 28, 2022</p>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/images/Articles-card-2.png" alt="Articles-card-2" />
                <div className="card-texts">
                  <h2>
                    How to properly disinfect your phone and other electronics
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>
                  <div className="data">
                    <p>Feb 1, 2022</p>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
