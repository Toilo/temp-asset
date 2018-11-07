import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Panel,
  PageHeader,
  Thumbnail,
  Button
} from "react-bootstrap";
// import bursarylogo from "../../resources/bursary.jpg";
import learner_dev from "../../resources/vine_camp4.jpg";
import learner_dev1 from "../../resources/vine_camp6.jpg";

import "./ProgrammePanel.css";

export default class ProgrammePanel extends Component {
  render() {
    return (
      <Panel className="bursaryPanel">
        <Panel.Body>
          <PageHeader className="pageHeaders">
            Our Programmes
            <br />
            <small>
              {" "}
              Bursaries are variable and cover a percentage of the cost of
              tuition together with an annual book allowance.
            </small>
            <br />
            <small>
              We now run the learner development programme for grade 8 and 9
              learners from 6 schools in Mathematics and Science.
            </small>
          </PageHeader>
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <Thumbnail src={learner_dev} alt="242x200">
                  <div className="cardHeading">
                    <h3>Bursary Application Programme</h3>
                  </div>
                  <p>
                    We help you and provide instructions on applying for a
                    Bursary.
                  </p>
                  <p>
                    <Button>Learn More</Button>
                  </p>
                </Thumbnail>
              </Col>

              <Col xs={6} md={3} />

              <Col xs={6} md={3}>
                <Thumbnail src={learner_dev1} alt="242x200">
                  <h3>Learner Development Programme (LDP)</h3>
                  <p>The Grade 8 and 9 Mathematics and Science Programme.</p>
                  <p>
                    <Button>Learn More</Button>
                  </p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}
