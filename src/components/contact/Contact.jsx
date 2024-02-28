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
            <form></form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
