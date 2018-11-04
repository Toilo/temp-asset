import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import slide1 from '../../resources/slide1.jpg';
import slide2 from '../../resources/slide2.jpeg';
import slide3 from '../../resources/slide3.jpeg';


export default class Banner extends Component {
  render() {
    return (
      <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
            <div className="image-overlay"></div>
            <div className="carousel-image" style={{backgroundImage: `url(${slide1})`}}>
            </div> 
            <Carousel.Caption className="carouselCaption-container">
            <h3 className="heading">Who are we?</h3>
            <p className="subtext">
            We are a non-profit NGO which aims to provide opportunities for students from disadvantaged
            communities.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        
      <Carousel.Item>
      <div className="image-overlay"></div>
        <div className="carousel-image" style={{backgroundImage: `url(${slide2})`}}></div>
        
        <Carousel.Caption className="carouselCaption-container">
          <h3 className="heading">Programmes</h3>
          <p className="subtext">Our core Programmes include 
          <br />
          <a href="" style={{color: '#6C7828', fontWeight: 'bold'}}>The Bursary Programme </a>
          and 
          <br />
          <a href="" style={{color: '#6C7828', fontWeight: 'bold'}}>The Learner Development Programme</a>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="image-overlay"></div>
        <div className="carousel-image" style={{backgroundImage: `url(${slide3})`}}></div>
      
        <Carousel.Caption className="carouselCaption-container">
          <h3 className="heading">What can you do to help?</h3>
          <p className="subtext">Donate towards our Programmes and help us to stem the cycle of poverty and for the youth to realize their dreams.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
