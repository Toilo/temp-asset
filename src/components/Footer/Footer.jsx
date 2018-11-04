import React, { Component } from 'react'
import {Row, Col, Grid, Nav, NavItem} from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Row>
                <Col xs={6} md={4}>
                    <h4 className="footerHeading">Our Contact</h4>
                    <h5>Asset</h5>
                    <p>5 Long Street</p>
                    <p>Mowbray</p>
                    <p>Western Cape</p>
                    <p>7700</p>
                    <p>South Africa</p>
                    <p>	021 685 1025</p>
                </Col>

                <Col xs={6} md={4}>
                <h4 className="footerHeading">Registration</h4>
                <h5>Section 21</h5>
                <p>Non-Profit Organisation</p>
                <p>Public Benefit Organisation: Reg. No. (2002/028121/08)</p>
                <p>Reg. No. (NPO-027-084)</p>
                <p>Reg. No. (PBO 930002121)</p>
            </Col>
            
            <Col xs={6} md={4}>
            <h4 className="footerHeading">Social Media</h4>
            <p><a href="" style={{color: '#d9534f'}}>Facebook</a></p>
            <p><a href="" style={{color: '#d9534f'}}>Twitter</a></p>
        </Col>
            </Row>

            <hr />
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <small style={{color: 'lightgrey'}}>Copyright ASSET &#169; 2018. Designed By CodeIn Technologies</small>
            </Row>
        </Grid>
      </div>
    )
  }
}
