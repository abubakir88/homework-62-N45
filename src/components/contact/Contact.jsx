import "./Contact.scss";

function Contact() {
  return (
    <>
      <section className="Contact" id="Contact">
        <div className="container">
          <div className="Contact-content">
            <div className="Contact-texts">
              <h1>Contact Us</h1>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
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
              <hr />
              <h2>Not convinced yet?</h2>
              <h6>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </h6>
              <button>Browse our packages</button>
            </div>
            <form>
              <div className="inputs">
                <div className="name">
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" />
                </div>

                <div className="name">
                  <label htmlFor="number">Phone number</label>
                  <input type="number" id="number" />
                </div>

                <div className="name">
                  <label htmlFor="Address">Address</label>
                  <input type="address" id="Address" />
                </div>

                <div className="name">
                  <label htmlFor="Email">Email</label>
                  <input type="email" id="Email" />
                </div>

                <div className="name">
                  <label htmlFor="Requested service">Requested service</label>
                  <input type="text" id="Requested service" />
                </div>

                <div className="name">
                  <label htmlFor="Day of service"> Day of service</label>
                  <input type="text" id="Day of service" />
                </div>

                <div className="name">
                  <label htmlFor="area">Add a note</label>
                  <textarea
                    name="area"
                    id="area"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button type="submit">Submit message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
