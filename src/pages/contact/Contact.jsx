import "./contact.css";

const Contact = () => {
  return (
    <div id="contact-section" className="page-section mt-4 ">
      <div className="heading-block text-center">
        <div className="container ">
          <h2>Get in Touch with us</h2>
          <span id="botQuest">
            Still have Questions? Contact Us using the Form below.
          </span>
          <h1>___</h1>
        </div>

        <div className="row align-items-contain col-mb-50 mb-0">
          <div className="card overflow-hidden">
            <div className="card-body">
              <h4>Opening Hours</h4>
              <br />
              <h6>9.00 AM TO 5.00 PM</h6>
              <h6>SUNDAY HOLIDAY</h6>
              <br />
              {/* <ul class="iconlist mb-0">
              <li><i class="icon-time color"></i> <strong>Mondays-Fridays:</strong> 10AM to 7PM</li>
              <li><i class="icon-time color"></i> <strong>Saturdays:</strong> 11AM to 3PM</li>
              <li><i class="icon-time text-danger"></i> <strong>Sundays:</strong> Closed</li>
          </ul> */}
              <i className="fa-regular fa-clock fa-lg"></i>
            </div>
            <div id="s-icons" style={{ paddingLeft: 20 }}>
              <a
                href="https://www.facebook.com/xendgreenenergy"
                target="_blank"
                rel="noreferrer"
                className="social-icon si-colored si-facebook"
                title="Facebook"
              >
                <i className="fa-brands fa-square-facebook social-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/xendgreenenergy/"
                target="_blank"
                rel="noreferrer"
                className="social-icon si-colored si-instagram"
                title="Instagram"
              >
                <i className="fa-brands fa-square-instagram social-icon"></i>
              </a>
              <a
                href="https://www.youtube.com/@xendgreenenergy"
                target="_blank"
                rel="noreferrer"
                className="social-icon si-colored si-youtube"
                data-toggle="tooltip"
                data-placement="top"
                title
                data-original-title="youtube"
              >
                <i
                  className="fa-brands fa-square-youtube social-icon "
                  data-placement="top"
                ></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=916235635000&text=Hi, I have some questions about your Services/Products."
                target="_blank"
                rel="noreferrer"
                className="social-icon si-colored si-whatsapp"
                data-toggle="tooltip"
                title
                data-original-title="WHATSAPP"
              >
                <i className="fa-brands fa-square-whatsapp social-icon"></i>
              </a>
            </div>
          </div>
          <br />
          {/* Modal Contact Form
  ============================================= */}

          {/* /.modal */}
          {/* Modal Contact Form End */}
          {/* <div class="fancy-title title-border">
          <h3>Send us an Email</h3>
      </div> */}

          {/* Google Map
  ============================================= */}
          <div
            className="col-lg-6  min-vh-40 mt-5"
            style={{ paddingBottom: "50px" }}
          >
            <div
              className="fluid-width-video-wrapper gmap"
              style={{ paddingTop: "75%", paddingLeft: "75%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4656.8714296625385!2d76.08189002832964!3d11.042638758201068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64b7c7282b251%3A0xf8086a9a7b641983!2sXend%20green%20energy!5e0!3m2!1sen!2sin!4v1679898787531!5m2!1sen!2sin"
                tabIndex="0"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="fitvid0"
                style={{ border: 0 }}
              />
            </div>{" "}
          </div>
          {/* Google Map End */}
          {/* Contact Form
  ============================================= */}
          <div className="col-lg-6">
            {/* Contact Form End */}

            <div
              className="container ff-hb wow zoomIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
              }}
            >
              <div id="contact_form">
                <div
                  className="quote_form col-md-7 col-sm-12 col-xs-12 ff-hb wow zoomIn animated animate__fadeInBottomRight"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "zoomIn",
                  }}
                >
                  <form id="quote_request" method="post">
                    <legend className="form_title">
                      <h3>Request A Quote</h3>
                    </legend>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          placeholder="Name"
                          name="name"
                        />
                        <span
                          className="error text-danger"
                          id="quote_request_name_error"
                        />
                        <input
                          type="hidden"
                          name="request_type"
                          defaultValue="Quote Request"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          name="email"
                        />
                        <span
                          className="error text-danger"
                          id="quote_request_email_error"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="phone"
                          className="form-control form-control-lg"
                          id="phone"
                          placeholder="Phone"
                          name="phone"
                        />
                        <span
                          className="error text-danger"
                          id="quote_request_phone_error"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Address"
                          name="address"
                        />
                        <span
                          className="error text-danger"
                          id="quote_request_address_error"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <h5 className="form_subtitle">Product Requirement</h5>
                      </div>
                    </div>
                    <div className="form_section">
                      <p>If you know our Product range select from below.</p>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label htmlFor="product">Product</label>
                        <select
                          id="product"
                          className="form-control form-control-lg"
                          name="product"
                        >
                          <option value="Choose" selected hidden>
                            Choose...
                          </option>
                          <option>Super Nova</option>
                          <option>Hyper Nova</option>
                          <option>Quasar</option>
                          <option>Quasar-Bi</option>
                        </select>
                      </div>
                      <div className="col">
                        <label htmlFor="model">Model</label>
                        <select
                          id="model"
                          className="form-control form-control-lg"
                          name="model"
                          disabled
                        >
                          <option selected hidden value="Choose">
                            Choose...
                          </option>
                          <option product="Super Nova">CS-SNxxx-144</option>
                          <option product="Super Nova">CS-SNxxx-132</option>
                          <option product="Super Nova">CS-SNxxx-120</option>
                          <option product="Hyper Nova">CS-HNxxx-144</option>
                          <option product="Hyper Nova">CS-HNxxx-132</option>
                          <option product="Hyper Nova">CS-HNxxx-120</option>
                          <option product="Quasar">CS-QUxxx-132</option>
                          <option product="Quasar">CS-QUxxx-120</option>
                          <option product="Quasar">CS-QUxxx-110</option>
                          <option product="Quasar-Bi">CS-QBxxx-132</option>
                          <option product="Quasar-Bi">CS-QBxxx-120</option>
                          <option product="Quasar-Bi">CS-QBxxx-110</option>
                        </select>
                      </div>
                    </div>
                    <div className="form_section">
                      <p>
                        If you don't know our product range fill details below.
                      </p>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label htmlFor="wp">Please mention Wp</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="wp"
                          placeholder="Mention WP"
                          name="wp"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="qty_nos">Qty in Nos</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="qty_nos"
                          placeholder="Qty in Nos"
                          name="qty_nos"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <button
                          className="link-button form-button btn btn-danger"
                          type="submit"
                          id="request_submit"
                          onClick="sendMail('quote_request');  return false;"
                        >
                          <a className="button-link" href="#" draggable="false">
                            Submit Request
                          </a>
                        </button>
                        <span
                          id="quote_request_success_message"
                          className="text-success text-center"
                        />
                        <span
                          id="quote_request_error_message"
                          className="text-danger text-center"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Info
    ============================================= */}
      </div>
    </div>
  );
};

export default Contact;
