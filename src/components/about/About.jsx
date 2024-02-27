import "./About.scss";

function About() {
  return (
    <>
      <section className="About" id="about">
        <div className="container">
          <div className="About-content">
            <div className="title">
              <h1>About Us</h1>
              <p>
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                <br />
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nu.
              </p>
            </div>

            <div className="about-cards">
              <div className="card">
                <img src="/images/about-card.png" alt="" />
                <h1>1. Schedule online</h1>
                <p>
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="card">
                <img src="/images/about-card-2.png" alt="" />
                <h1>2. Pay online easily</h1>
                <p>
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="card">
                <img src="/images/about-card-3.png" alt="" />
                <h1>3. Get your house cleaned</h1>
                <p>
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <div className="about-btns">
              <button>Get a free quote</button>
              <button>Explore services</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
