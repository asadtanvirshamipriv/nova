import React from "react";
import Link from "next/link";

import { Button} from "react-bootstrap";

export const ServicesSection = () => {
  return (
    <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="content_2 mx-auto">
            <h1 className="bottom-heading">WE WORK REMARKLY!</h1>
            <div className="service-in ">
              <div className="service-in-child">
                <ul>
                  <a>
                    <li>
                      <img src={"website.png"}></img>
                      <h4 className="card-text mt-4">Web Development</h4>
                    </li>
                  </a>
                </ul>
                <ul>
                  <a>
                    <li>
                      <img src={"smartphone.png"}></img>
                      <h4 className="card-text mt-4">
                        Mobile Development
                      </h4>
                    </li>
                  </a>
                </ul>
                <ul>
                  <a>
                    <li>
                      <img src={"logo-design.png"}></img>
                      <h4 className="card-text mt-4">
                      Graphic Designing 
                      </h4>
                    </li>
                  </a>
                </ul>
                <ul>
                  <a>
                    <li>
                      <img src={"social-media.png"}></img>
                      <h4 className="card-text mt-4">
                        Digital & SEO Marketing
                      </h4>
                    </li>
                  </a>
                </ul>
                <ul>
                  <a>
                    <li>
                      <img src={"animation.png"}></img>
                      <h4 className="card-text mt-4">
                      Video Animation 
                      </h4>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="">
          <Link href="/contact"><Button className="btn-lg mx-1 mb-5">Start Project</Button></Link> {" "}
          <Link href="/services"><Button className="btn-lg mx-1 mb-5">Check Services</Button></Link> {" "}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default ServicesSection;
