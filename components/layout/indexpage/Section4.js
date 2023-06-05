import React from "react";

import { Button, Row, Col } from "react-bootstrap";

const Section_4 = () => {
  return (
    <section className="about add_before">
      <div className="container">
        <div className="about-us-section">
          <Row style={{ marginTop: 50 }}>
            <Col md={6}>
              <div style={{ top: 0 }}>
                <img src={"de.png"} className="img-shadow img-fluid" />
              </div>
              <div className=""></div>
            </Col>
            <Col md={6} style={{ marginTop: 30 }}>
              <p style={{ color: "red", fontSize: 22, fontWeight: "600" }}>
              </p>
              <h2 style={{ color: "#3464eb", fontSize:29 }}>
              OUR EFFORTS YOUR VISION
              </h2>
              <p className="mt-4" style={{ color: "#2a2b2b" }}>
                Our approach is to work with impeccable plans and provide the
                requested product with a quick turnaround time to ensure our
                customer satisfaction and not only quick turnaround is our prime
                focus, we also make sure to provide uniqueness in the product
                while considering the needs of the industry, Moreover we also
                keep our customers looped in throughout the process of the
                project. Our clients are getting their desired products in less
                amount as compared to the market.
              </p>
              <div className="text-center mt-5">
                <div className="">
                <p className="mt-4" style={{ color: "#2a2b2b", }}>
                  Our vision is to become the leading Marketing agency and to
                  provide the best of our solutions globally. We believe that
                  our growth is not self-dependent, our team plays a very
                  important role in this development and we make sure to give
                  our best not only to our customers but to all of our staff as
                  well. At every step of Digious’s growth, its employee’s growth
                  is also compulsory. We strictly believe in deserving nature
                  and give every employee a chance to prove their abilities at
                  each stage of our hierarchy.
                </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
