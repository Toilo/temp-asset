import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Content from './components/Content/Content';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import Programmes from './components/Programmes/Programmes';
import Funding from './components/Funding/Funding';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/home" component={Content} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/programmes" component={Programmes} />
        <Route path="/funding" component={Funding} />
        <Route path="/blog" component={Blog} />
        <Route path="/gallery" component={Gallery} />
        
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
      </div>
    );
  }
}

export default App;
