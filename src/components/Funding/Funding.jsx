import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import slide1 from "../../resources/slide1.jpg";
import slide2 from "../../resources/slide2.jpeg";
import slide3 from "../../resources/slide3.jpeg";
import {
  Row,
  Col,
  Grid,
  Carousel,
  Thumbnail,
  Nav,
  NavItem
} from "react-bootstrap";

import { PageHeader } from "react-bootstrap";

export default class Funding extends Component {
  render() {
    return (
      <div>
        <Header />

        <PageHeader>
          <h4 style={{ color: "#fff", textAlign: "center" }}>Funding</h4>
        </PageHeader>
        <Grid>
          <Row>
            <p
              style={{
                fontFamily: "Arial",
                width: "75%",
                color: "white",
                textAlign: "center"
              }}
            >
              ASSET relies on donor funding to continue its contribution to
              education in the Western Cape. The growth in the number of youngs
              people we have been able to support over the years is due to the
              generosity of our donors and of the trusts and funds we administer
              and we express our deep gratitude for the part they are playing in
              our work. The need however is very great and we wish to strengthen
              and expand our current work. We can provide a great partnership
              with individuals or foundations who wish to make a real difference
              to the education in South Africa that will change the lives of the
              youth for the better.
            </p>
          </Row>
          <Row>
            <Carousel>
              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide1})` }}
                />
                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">Who are we?</h3>
                  <p className="subtext">
                    We are a non-profit NGO which aims to provide opportunities
                    for students from disadvantaged communities.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide2})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">Programmes</h3>
                  <p className="subtext">
                    Our core Programmes include
                    <br />
                    <a href="" style={{ color: "#6C7828", fontWeight: "bold" }}>
                      The Bursary Programme{" "}
                    </a>
                    and
                    <br />
                    <a href="" style={{ color: "#6C7828", fontWeight: "bold" }}>
                      The Learner Development Programme
                    </a>
                    .
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide3})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">What can you do to help?</h3>
                  <p className="subtext">
                    Donate towards our Programmes and help us to stem the cycle
                    of poverty and for the youth to realize their dreams.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide3})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">What can you do to help?</h3>
                  <p className="subtext">
                    Donate towards our Programmes and help us to stem the cycle
                    of poverty and for the youth to realize their dreams.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide3})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">What can you do to help?</h3>
                  <p className="subtext">
                    Donate towards our Programmes and help us to stem the cycle
                    of poverty and for the youth to realize their dreams.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide3})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">What can you do to help?</h3>
                  <p className="subtext">
                    Donate towards our Programmes and help us to stem the cycle
                    of poverty and for the youth to realize their dreams.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="image-overlay" />
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${slide3})` }}
                />

                <Carousel.Caption className="carouselCaption-container">
                  <h3 className="heading">What can you do to help?</h3>
                  <p className="subtext">
                    Donate towards our Programmes and help us to stem the cycle
                    of poverty and for the youth to realize their dreams.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Grid>
        <hr />
        <Footer />
      </div>
    );
  }
}
