/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col } from "react-bootstrap";

import ContactForm from "../../shared/ContactForm";

const index = () => {
  return (
    <div className="about-page-main">
      <div className="">
        <section className="about-section-main ">
          <Row className="container">
            <Col md={8}>
              <div className="about-page-content" style={{ marginTop: 150 }}>
                <h3>WE HELP YOUR GOALS TO ACHIEVE</h3>
                <p>
                  NovaTechSoftware is the fastest leading IT Solutions and Marketing
                  Agency based in UniteStates, Texas providing services
                  globally. Here at NovaTechSoftware, we make sure to provide the best
                  of our services for any kind of field. Our talented team of
                  graphic designers, website developers, Marketing specialists,
                  Software developers, game developers, and debuggers keep track
                  of modern codes and techniques to meet market requirements. We
                  not only provide the best services, but we also make sure our
                  customers are treated professionally and are satisfied with
                  what they receive because their satisfaction is our priority
                  throughout the time they are connected with us.
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section> 
          <div className="description-div container">
            <div className="description-heading-div">
              <h3>VISION</h3>
              <p>
              Our vision is to become the leading Marketing agency and to
              provide the best of our solutions globally. We believe that our
              growth is not self-dependent, our team plays a very important role
              in this development and we make sure to give our best not only to
              our customers but to all of our staff as well. At every step of
              Digious’s growth, its employee’s growth is also compulsory. We
              strictly believe in deserving nature and give every employee a
              chance to prove their abilities at each stage of our hierarchy.
              </p>
            </div>
            <div className="description-heading-div mt-5">
              <h3>PASSION</h3>
              <p>
                Our Passion strives against new technologies and ideas. NovaTechSoftware
                makes sure to train all their employees with the latest
                techniques and ideas. Our monthly seminars and workshops prove
                our motivation towards learning passion to provide the best of
                our services to our customers.
              </p>
            </div>
            <div className="description-heading-div mt-5 mb-5">
              <h3>TRUST</h3>
              <p>
                Our first and foremost priority is always to be quick at
                understanding and providing deliverables to our customers before
                the project timeline is stated which always plays an important
                role for our customers to trust us.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
