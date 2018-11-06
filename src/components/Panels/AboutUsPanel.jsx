import React, { Component } from "react";
import { Grid, Row, Col, Panel, PageHeader, Image } from "react-bootstrap";
import visionImage from "../../resources/aboutpanel.jpeg";

import "./AboutUsPanel.css";

export default class AboutUsPanel extends Component {
  render() {
    return (
      <Panel className="aboutusPanel">
        <Panel.Body>
          <PageHeader className="aboutHeaders">
            About Us
            <br />
          </PageHeader>
          <div
            className="detailsContainer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p
              style={{
                fontFamily: "Arial",
                width: "75%",
                color: "grey",
                textAlign: "center"
              }}
            >
              ASSET is a Western Cape, section 21, non-profit organisation which
              was launched in January 2003. It previously operated under the
              auspices of the Cape Western Region of the SA Institute of Race
              Relations and has a long, proud history of serving the educational
              needs of disadvantaged students.
            </p>
          </div>

          <br />

          <br />

          <Grid>
            <Row>
              <h4 className="aboutHeading">
                <span className="statementOne">Our</span>
                <span className="statementTwo">Vision</span>
              </h4>
              <div
                className="detailsContainer"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p
                  style={{
                    fontFamily: "Arial",
                    width: "75%",
                    color: "grey",
                    textAlign: "center"
                  }}
                >
                  The Association for Educational Transformation believes in the
                  transforming quality of education in individual and national
                  life and that it is the foundation of a better future for all.
                </p>
              </div>
            </Row>

            <Row>
              <h4 className="aboutHeading">
                <span className="statementOne">Our</span>
                <span className="statementTwo">Mission</span>
              </h4>
              <div
                className="detailsContainer"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p
                  style={{
                    fontFamily: "Arial",
                    width: "75%",
                    color: "grey",
                    textAlign: "center"
                  }}
                >
                  Our Mission is to contribute towards the process of
                  educational transformation by providing opportunities for
                  students from disadvantaged communities to realise their full
                  educational potential so that they are able to meet the
                  challenges of life and make a positive contribution to
                  society.
                </p>
              </div>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}
