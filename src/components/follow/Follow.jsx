import "./Follow.scss";

function Follow() {
  return (
    <>
      <section className="follow" id="follow">
        <div className="container">
          <div className="follow-content">
            <div className="follow-img">
              <img src="/images/follow-img.png" alt="" />
            </div>
            <div className="follow-texts">
              <h4>Covid-19 sanitization</h4>
              <h1>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h1>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="contact">
                <button> Get a free quote</button>
                <div className="number">
                  <img src="/images/phone.png" alt="phone" />
                  <p>
                    Call us now <span>(414) 567 - 2109</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Follow;
