import Contact from "../contact/Contact";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  "
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner w-100 "
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div className="carousel-item active">
            <div
              style={{
                backgroundImage: "url(images/Home_Image.jpg)",
              }}
              className=" banner d-block object-fit-contain vw-100 
               "
            />
            <div className="carousel-caption carousel-caption d-none d-md-block">
              <h2
                className="animated animate__fadeInBottomRight"
                style={{ animationDelay: "1s" }}
              >
                Solar energy: a bright idea for a sustainable future{" "}
              </h2>
              {/* <h3
                  className="animated bounceInLeft"
                  style={{ animationDelay: "2s" }}
                >Web Design and Development Agency</h3> */}
              <div />
            </div>
          </div>
          <div className="carousel-item active">
            <div
              style={{
                backgroundImage: "url(images/Home_Image2.jpg)",
              }}
              className=" banner d-block object-fit-contain vw-100 
               "
            />
            <div className="carousel-caption carousel-caption d-none d-md-block">
              <h2
                className="animated animate__fadeInBottomLeft"
                style={{ animationDelay: "1s" }}
              >
                Let the sun power your life{" "}
              </h2>
              {/* <h3
                  className="animated bounceInLeft"
                  style={{ animationDelay: "2s" }}
                >Web Design and Development Agency</h3> */}
              <div />
            </div>
          </div>
          <div className="carousel-item active">
            <div
              style={{
                backgroundImage: "url(images/Home_Image3.jpg)",
              }}
              className=" banner d-block object-fit-contain vw-100 
               "
            />
            <div
              id="thirdCaption"
              className="carousel-caption carousel-caption d-none d-md-block "
            >
              <h2
                className="animated animate__fadeInBottomRight "
                style={{ animationDelay: "1s" }}
              >
                The future is <br />
                bright with
                <br /> solar energy{" "}
              </h2>
              {/* <h3
                  className="animated bounceInLeft"
                  style={{ animationDelay: "2s" }}
                >Web Design and Development Agency</h3> */}
              <div />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <span className="visually-hidden">Previous</span>
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <span className="visually-hidden">Next</span>
          </span>
        </button>
      </div>
      <div className="heading-block">
        <h1
          style={{
            fontWeight: 700,
            marginTop: 100,
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "70px",
            color: "black",
          }}
        >
          WELCOME
        </h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-center d-flex">
          <p className="MsoNormal">
            <b>
              <i>
                <span
                  style={{
                    fontSize: "20pt",
                    fontFamily: '"Avenir Next", sans-serif',
                    color: "rgb(8, 82, 148)",
                    marginLeft: "20px",
                  }}
                >
                  X
                </span>
              </i>
            </b>
            <b>
              <i>
                <span
                  style={{
                    fontSize: "17pt",
                    fontFamily: '"Avenir Next", sans-serif',
                    color: "rgb(8, 82, 148)",
                  }}
                >
                  end&nbsp;
                </span>
              </i>
            </b>
            <b>
              <i>
                <span
                  style={{
                    fontSize: "17pt",
                    fontFamily: '"Avenir Next", sans-serif',
                    color: "rgb(0, 176, 80)",
                  }}
                >
                  green energy
                </span>
              </i>
            </b>
            <span
              style={{
                fontFamily: '"Avenir Next", sans-serif',
                color: "rgb(0, 176, 80)",
              }}
            >
              &nbsp;
            </span>
            is a renowned name in the solar energy industry. We are one of the
            leading channel partners of APN solar Mumbai, an approved company by
            the ministry of new and renewable energy, India. We are certified
            with ISO 14001:2015, ISO 9001:2015, and ISO 45001:2018
            certifications. Our commitment to quality has made us one of the
            most sought-after companies in the solar industry. We are a start-up
            that follows the principles of 'start-up India' and 'make in India',
            and UAF United Accreditation Foundation. Being approved by the
            Ministry of New and Renewable energy and Ministry of MSME, Govt. of
            India. Our commitment to quality has made us one of the most
            sought-after companies in the solar industry. Xend Green Energy
            provides reliable solar energy products for homes and businesses.
            <br />
            <br />
          </p>
          <div className="col-lg-5">
            <b>
              <u>
                <span
                  style={{
                    fontSize: "16pt",
                    lineHeight: 1.5,
                    fontFamily: '"Avenir Next Demi Bold", sans-serif',
                    color: "rgb(0, 110, 0)",
                  }}
                >
                  ON-GRID
                </span>
              </u>
            </b>{" "}
            <p>
              On-Grid Systems are solar PV systems that only generate power when
              the utility power grid is available.They must be connected to the
              grid to function. They can send excess power generated back to the
              grid when you are overproducing so you credit it for later use.
              <br />
              <br />
            </p>
            <b>
              <u>
                <span
                  style={{
                    fontSize: "16pt",
                    fontFamily: '"Avenir Next Demi Bold", sans-serif',
                    color: "rgb(0, 110, 0)",
                  }}
                >
                  OFF-GRID
                </span>
              </u>
            </b>{" "}
            <p>
              These systems allow you store your solar power in batteries for
              use when the power grid goes down or if you are not on the grid.
              <br />
              <br />
            </p>
            <b>
              <u>
                <span
                  style={{
                    fontSize: "16pt",
                    fontFamily: '"Avenir Next Demi Bold", sans-serif',
                    color: "rgb(0, 110, 0)",
                    textAlign: "center",
                  }}
                >
                  HYBRID SETUP
                </span>
              </u>
            </b>{" "}
            <p>
              Hybrid solar system is the upgraded version of off-grid and on
              grid solar system. It has battery backup in it to store power and
              it also have the ability to feed surplus electricity into main
              grid. It will work day and night which means you always have
              electricity at your home.
              <br />
              <br />
            </p>
          </div>
          <div className="col-lg-7 align-self-end">
            <div className="position-relative overflow-hidden">
              <img
                src="images/maintenance2.jpg"
                data-animate="fadeInUp"
                data-delay={100}
                alt="Maintenance image"
                className="fadeInUp animated"
              />
              {/* <img src="images/services/main-fmobile.png" style="top: 0; left: 0; min-width: 100%; min-height: 100%;" data-animate="fadeInUp" data-delay="400" alt="iPhone" class="position-absolute"> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 col-mb-50">
          <div className="col-lg-4">
            <i className="icon fa-solid fa-desktop color inline-block"></i>
            <div
              className="heading-block border-bottom-0"
              style={{ marginBottom: 15 }}
            >
              {/* <span class="before-heading">Why Choose.</span> */}
              <h4>WHY CHOOSE US</h4>
            </div>
            <p className="botDesc">
              Xend Green Energy is an industry leader when it comes to renewable
              energy system solutions. We help companies create new revenue
              streams, reduce operational costs, and lower their carbon
              footprint through our end-to-end services. From initial
              feasibility studies to the installation of renewable technologies
              on site, we provide custom tailored solutions that will help
              businesses reach their cost/emission reduction goals for years to
              come. With Xend Green Energy's expertise in renewable
              technologies, you can be sure your business is future-proofed and
              prepared for what the future may bring.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="icon inline-block fa-solid fa-bolt fa-lg  "></i>
            <div
              className="heading-block border-bottom-0"
              style={{ marginBottom: 15 }}
            >
              {/* <span class="before-heading">Our Mission.</span> */}
              <h4>OUR MISSION</h4>
            </div>
            <p className="botDesc">
              At Xend Green Energy, it is our mission to promote the adoption of
              renewable energy around the world in order to reduce global carbon
              emissions and build a greener tomorrow. We believe that
              businesses, organizations, and people should switch to low carbon
              energy sources created by renewable technologies for power
              generation. Adopting renewable energy is one of the most impactful
              changes a company can make as they transition to more sustainable
              practices. Renewable energy and technological advancements in this
              field will be essential components in decarbonizing our global
              energy systems over the next few decades. Our products are
              designed to meet global standards of quality and performance. With
              our world-class products and services, we aim to provide our
              customers with best-in-class solar solutions.
            </p>
          </div>
          <div className="col-lg-4">
            <i
              className="icon inline-block fa-solid fa-sliders fa-rotate-90 fa-lg"
              style={{ marginBottom: 15 }}
            />
            <div
              className="heading-block border-bottom-0"
              style={{ marginBottom: 15 }}
            >
              {/* <span class="before-heading">What We Do.</span> */}
              <h4>WHAT WE DO</h4>
            </div>
            <p className="botDesc">
              On-Grid, Off-Grid, Hybrid Setup, Solar Water Heater, Home Lighting
              System, Water Pump, Solar Fencing, and Solar Street Light.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
