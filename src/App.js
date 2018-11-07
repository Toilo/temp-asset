import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Content from './components/Content/Content';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import Programmes from './components/Programmes/Programmes';
import Funding from './components/Funding/Funding';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
import NotFound from './components/404/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/home" component={Content} strict/>
        <Route path="/about" component={AboutUs} strict/>
        <Route path="/contact" component={Contact} strict/>
        <Route path="/programmes" component={Programmes} strict/>
        <Route path="/funding" component={Funding} strict/>
        <Route path="/blog" component={Blog} strict/>
        <Route path="/gallery" component={Gallery} strict/>
        <Route path="/404" component={NotFound} />
        
        <Redirect from="/" exact to="/home" />
        <Redirect to="/404" />
      </Switch>
      </div>
    );
  }
}

export default App;
