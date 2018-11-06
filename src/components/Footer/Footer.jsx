import React, { Component } from "react";
import { Row, Col, Grid, Nav, NavItem } from "react-bootstrap";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <h4 className="footerHeading">Our Contact</h4>
              <p>5 Long Street, Mowbray </p>
              <p>Cape Town, 7700</p>
              <p>Western Cape, South Africa</p>
              <p> 021 685 1025</p>
            </Col>

            <Col xs={6} md={4}>
              <h4 className="footerHeading">Registration</h4>
              <h5>Section 21: Reg. No. (2002/028121/08)</h5>
              <p>Non-Profit Organisation: Reg. No. (NPO-027-084)</p>
              <p>Public Benefit Organisation:Reg. No. (PBO 930002121)</p>
            </Col>

            <Col xs={6} md={4}>
              <h4 className="footerHeading">Social Media</h4>
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="btn-social btn-outline"
                  >
                    <span className="sr-only">Facebook</span>
                    <i className="fa fa-fw fa-facebook" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/"
                    className="btn-social btn-outline"
                  >
                    <span className="sr-only">Twitter</span>
                    <i className="fa fa-fw fa-twitter" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <small style={{ color: "lightgrey" }}>
              Copyright ASSET &#169; 2018. Designed By CodeIn Technologies
            </small>
          </Row>
        </Grid>
      </div>
    );
  }
}
