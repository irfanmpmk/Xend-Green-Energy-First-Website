import "./footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 2000) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
    });
  }, []);

  return (
    <div>
      <footer>
        <div className="returnToTop">
          <div
            className="return-to-top"
            style={{
              aspectRatio: "1",
              width: "30px",
              height: "30px",
              bottom: 40,
              right: 50,
              display: "inline",
              position: "fixed",
              fontSize: "30px",
              color: "#cfcfcf",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {visibility && <i className="fa-solid fa-circle-arrow-up"></i>}
          </div>
        </div>

        <div className="footer">
          <div
            className="container ff-hb wow zoomIn"
            style={{ animationName: "zoomIn" }}
          >
            <div className="row" style={{ display: "flex" }}>
              <div
                className="col-md-4 col-sm-3 col-xs-3 footer_logomenu wow zoomIn"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "zoomIn",
                }}
              >
                <img
                  className="footer_logo"
                  alt="logo"
                  src="LogoTransp.png"
                  height={100}
                  style={{ filter: "drop-shadow(white .25rem 2px 5px )" }}
                />
                <div
                  className="social_div wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "zoomIn",
                  }}
                >
                  <a
                    href="https://www.facebook.com/xendgreenenergy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="social_icon fa-brands fa-square-facebook fa-xl"
                      style={{ color: "#3b5998" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/xendgreenenergy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="social_icon fa-brands fa-square-instagram fa-xl"
                      style={{
                        color: "#eb9450",
                      }}
                    ></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@xendgreenenergy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="social_icon fa-brands fa-square-youtube fa-xl"
                      style={{ color: "#c4302b " }}
                    ></i>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=916235635000&text=Hi, I have some questions about your Services/Products."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="social_icon fa-brands fa-square-whatsapp fa-xl"
                      style={{ color: "#25d366 " }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="row mt-3 footer_menu ff-hb wow zoomIn "
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "zoomIn",
              }}
            >
              <div className="col-md-2 col-sm-6 col-xs-6 footer_company">
                <h6 className="footerTitle">Company</h6>
                <div className="col-sm-6  footer_submenu">
                  <a href="about.php">About Us</a>
                  <br />
                  <a href="news.php">News</a>
                  <br />
                  <a href="career.php">Career</a>
                  <br />
                  <a href="contact.php">Contact Us</a>
                  <br />
                </div>
              </div>
              <div
                className="col-md-2  footer_service ff-hb wow zoomIn"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "zoomIn",
                }}
              >
                <h6 className="footerTitle">Products</h6>
                <div className="col-md-12 col-sm-12 col-xs-3 footer_submenu">
                  <a href="superNova.php">Super Nova</a>
                  <br />
                  <a href="hyperNova.php">Hyper Nova</a>
                  <br />
                  <a href="quasar.php">Quasar</a>
                  <br />
                  <a href="quasar_bi.php">Quasar-Bi</a>
                  <br />
                </div>
                <br />
              </div>
            </div>
            <div
              className="row footer_menu ff-hb wow zoomIn"
              data-wow-delay="0.3s"
              style={{
                marginTop: "2%",
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "zoomIn",
              }}
            >
              <div
                className="col-xl-3 col-lg-4 col-md-6 p-0 g-1 infodiv adddiv"
                style={{ paddingRight: "0% !important" }}
              >
                <h6 className="footerTitle">Address</h6>
                <p>
                  Xend Green Energy <br />
                  15/593246, Daliya Keypees avenue
                  <br /> Perintalmanna Road, up-hill, <br />
                  Malappuram-676505,
                  <br />
                  Kerala, India.
                </p>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 infodiv adddiv"
                style={{ paddingRight: "0% !important" }}
              >
                <h6 className="footerTitle">Our HQ</h6>

                <p>
                  14/291K,Suite 85F,
                  <br />
                  First floor A Square Building Edathala, <br />
                  Kochin-683561 <br />
                  Kerala, India.
                </p>
              </div>

              <div
                className="col-xl-3 col-lg-4 col-md-6 mr-3 infodiv adddiv"
                style={{ paddingRight: "0% !important" }}
              >
                <h6 className="footerTitle">Email Us</h6>
                <p>
                  <a href="mailto:xendgreenenergykochi@gmail.com">
                    xendgreenenergykochi@gmail.com
                  </a>
                  <br />
                  <a href="mailto:xendgreenenergy@gmail.com">
                    xendgreenenergy@gmail.com
                  </a>
                </p>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6  infodiv">
                <h6 className="footerTitle phone_footer">Speak to Us</h6>

                <p>
                  <a href="tel:6235635000">Office : 6235635000</a>
                  <br />
                  <a href="tel:+919656444447">PK Bava : 9656444447</a>
                  <br />
                  <a href="tel:+919656107610">Nishad : 9656107610</a>
                  <br />
                </p>
              </div>
            </div>
            <div className="col medium_footer" style={{ textAlign: "center" }}>
              <br />
              <div className="footerCopyright">
                <p>
                  Copyright © Xend Green Energy PVT LTD. 2023 All Right Reserved
                </p>
                {/* <p>Privacy policy | Terms of use</p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
