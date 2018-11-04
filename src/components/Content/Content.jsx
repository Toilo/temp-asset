import React, { Component } from 'react'
import ProgrammePanel from '../Panels/ProgrammePanel';
import AboutUsPanel from '../Panels/AboutUsPanel';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <div>
          <Header />
          <Banner />
          <ProgrammePanel />
          <AboutUsPanel />
          <Footer />
      </div>
    )
  }
}
