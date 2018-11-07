import React, { Component } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Image } from 'react-bootstrap';

export default class NotFound extends Component {
    constructor() {
        super();
        
        this.errorReport = this.errorReport.bind(this.errorReport)
    }

    errorReport = () => {
        let location = window.location;

        console.log(location);

        return location.origin;
    };

  render() {
    return (
      <div>
        <Header />
            <div>
                <h4 style={{ color: "#fff", textAlign: "center" }}>Oops ! : ( </h4>
            </div>

            <div>
                <p style={{textAlign: 'center', color: '#ea2424'}}> { this.errorReport() } </p>                
            </div>

            <div>
                <Image src="https://vignette.wikia.nocookie.net/subnautica/images/1/1a/Page-not-found.png/revision/latest?cb=20170603223615" />
            </div>
        <Footer />
      </div>
    )
  }
}
