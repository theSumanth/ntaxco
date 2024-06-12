import { useRef } from "react";
import experience from "../../assets/experience.png";
import success from "../../assets/success.png";
import CountUp from "react-countup";
import "./About.css";
import { useInView } from "framer-motion";

const About = () => {
  const counterRef = useRef(null);

  const isInView = useInView(counterRef);

  return (
    <section className="section_all" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title_all text-center">
              <h3 className=" h1">
                Welcome To{" "}
                <span className="text-custom font-weight-bold">Ntaxco</span>
              </h3>
              <p className="section_subtitle mx-auto">
                We Provide Solutions for Asset Management.
              </p>
            </div>
          </div>
        </div>
        <div className="row  set-center vertical_content_manage mt-5">
          <div className="col-lg-6">
            <div className="about_header_main mt-3">
              <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                Read the story behind our success..
              </h4>
              <p className="mt-3">
                We, Nizams Tax Consultancy, situated at Tapovanam, Anantapur,
                Andhra pradesh, are multidisciplinary team of accounting, tax
                and audit professionals with deep, sector-specific experience in
                wide spectrum of Industries. We offer a range of services to
                meet the complex and evolving accounting, tax and compliance
                challenges that you face on multiple fronts.{" "}
              </p>
              <p className="mt-3">
                Mission of our firm is to provide clients with the 'one stop
                Solution' for all their businesses, financial and regulatory
                requirement.
              </p>
            </div>
          </div>
          <div className="img-id col-lg-6">
            <div className="img_about">
              <img
                src={success}
                width={"350px"}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
        <div className="row  set-center vertical_content_manage mt-5">
          <div className="img-id col-lg-6">
            <div className="img_about mt-3">
              <img
                src={experience}
                width={"400px"}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_header_main mt-3">
              <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                Why Us?
              </h4>
              <p className="h1 font-weight-bolder text-primary">
                We have more than ten years of experience
              </p>
              <p className="mt-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. More than 25
                years of experience working in the industry has enabled us to
                build our services and solutions in strategy, consulting,
                digital.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-3 bg-light temp">
        <div className="col-lg-4">
          <div className="about_content_box_all mt-3">
            <div className="about_detail text-center">
              <div className="about_icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                Innovative Tax Solutions
              </h5>
              <p className="edu_desc mt-3 mb-0 text-muted">
                At Ntaxco, we offer innovative tax solutions tailored to your
                needs. Our experienced team stays updated with tax laws to
                provide strategic planning and savings.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="about_content_box_all mt-3">
            <div className="about_detail text-center">
              <div className="about_icon">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                Expert Tax Advisors
              </h5>
              <p className="edu_desc mt-3 mb-0 text-muted">
                Rely on our team of seasoned tax advisors for expert guidance.
                We provide comprehensive support and advice, ensuring compliance
                and maximizing savings for individuals and businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="about_content_box_all mt-3">
            <div className="about_detail text-center">
              <div className="about_icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                Strategic Tax Planning
              </h5>
              <p className="edu_desc mt-3 mb-0 text-muted">
                Our strategic tax planning services are designed to optimize
                your financial position and minimize tax liabilities. We analyze
                your situation thoroughly and develop customized strategies to
                help you achieve your long-term financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" ref={counterRef}>
          <div className="col-lg-3 col-md-6">
            <div
              style={{ backgroundColor: "transparent" }}
              className="card text-center"
            >
              <div className="card-body">
                <h5 className="">All Time Clients</h5>
                <h3 className="card-number text-light">
                  {isInView && <CountUp end={10000} duration={5} />}+
                </h3>
                <p className="card-icon">👥</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              style={{ backgroundColor: "transparent" }}
              className="card text-center"
            >
              <div className="card-body">
                <h5 className="">Clients In This Year</h5>
                <h3 className="card-number text-light">
                  {isInView && <CountUp end={979} duration={5} />}+
                </h3>
                <p className="card-icon">📅</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              style={{ backgroundColor: "transparent" }}
              className="card text-center"
            >
              <div className="card-body">
                <h5 className=""> New Projects</h5>
                <h3 className="card-number text-light">
                  {isInView && <CountUp end={300} duration={5} />}+
                </h3>
                <p className="card-icon">🚀</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              style={{ backgroundColor: "transparent" }}
              className="card text-center"
            >
              <div className="card-body">
                <h5 className="">Avg Profit Increased</h5>
                <h3 className="card-number text-light">
                  {isInView && <CountUp end={35} duration={5} />}%
                </h3>
                <p className="card-icon">💰</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
