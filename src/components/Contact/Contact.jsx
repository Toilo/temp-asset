import React, { Component } from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { PageHeader } from 'react-bootstrap';

export default class Contact extends Component {
  render() {
    return (
      <div>
      <Header />

      <PageHeader>
        <h4 style={{color: '#fff', textAlign: 'center'}}>Contact Us</h4>
      </PageHeader>

      <Footer />
      </div>
    )
  }
}
