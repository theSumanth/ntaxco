import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-area section-padding mt-5">
        <div className="container">
          <div className="section-title text-center pt-5 ">
            <h1 className="text-primary fs-1 fw-bold">GET IN TOUCH</h1>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="contact" data-aos="zoom-in-up">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onsubmit="return validation();"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="shadow form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="shadow form-control placeholder:focus"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="shadow form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="shadow form-control"
                        placeholder="Your Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="shadow-lg btn btn-contact-bg"
                        title="Submit Your Message!"
                        style={{
                          backgroundColor: "#3B71CA",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>
                  Prashanti Nagar, Tapovanam, Anantapur, Andhra Pradesh - 515004
                </p>
              </div>
              <div className="single_address">
                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>info@ntaxco.com</p>
              </div>
              <div className="single_address">
                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>+91-7013881808</p>
              </div>
              <div className="single_address">
                <i className="fa fa-clock-o"></i>
                <h4>Work Time</h4>
                <p>
                  Mon - Sat: 08.00 - 16.00. <br />
                  Sun: 8.00 - 14.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container mt-5 mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.323903005039!2d77.58049597362411!3d14.694266074779541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ab5146f258d%3A0xf9fd1c9e9d70a44a!2sPrashanti%20Nagar%2C%20syndicate%20nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515004!5e0!3m2!1sen!2sin!4v1707677917313!5m2!1sen!2sin"
          frameborder={"0"}
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden={"false"}
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
