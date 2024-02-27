import "./Our.scss";

function Our() {
  return (
    <>
      <section className="our" id="our">
        <div className="container">
          <div className="our-content">
            <div className="title">
              <h1>Our Services</h1>
              <button>Explore services</button>
            </div>
            <div className="cards">
              <div className="card">
                <img src="/images/our-card.png" alt="" />
                <h1>House cleaning</h1>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="card">
                <img src="/images/our-card-2.png" alt="" />
                <h1>Office cleaning</h1>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
              <div className="card">
                <img src="/images/our-card-3.png" alt="" />
                <h1>Industrial cleaning</h1>
                <p>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Our;
