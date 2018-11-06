import React, { Component } from "react";
import { Row, Col, Grid, Thumbnail, Nav, NavItem } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Visit from "./visit";
import asset_pic from "../../resources/asset_pic.png";

import { PageHeader } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />

        <PageHeader>
          <h4 style={{ color: "#fff", textAlign: "center" }}>Contact Us</h4>
        </PageHeader>

        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Visit />
            </Col>
            <Col xs={12} md={6}>
              <h1>ASSET</h1>
              <Thumbnail
                src={asset_pic}
                style={{ marginLeft: "10px", borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </Grid>
        <hr />
        <Footer />
      </div>
    );
  }
}
