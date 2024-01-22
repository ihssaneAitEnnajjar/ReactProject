import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection';

import '../../styles/register.css';


const Register = () => {
  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Last Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Second Phone" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Address" type="text" />
                </FormGroup>
                <button className=" contact__btn" type="submit">
                  Register
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
