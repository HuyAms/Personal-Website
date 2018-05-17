import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import MyProjects from './containers/Projects/MyProjects';
import About from './containers/About/About';
import Aux from './hoc/ReactAux/ReactAux';

class App extends Component {
  render() {
    return (
        <Aux>
          <Layout>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/projects" component={MyProjects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Layout>
        </Aux>
    );
  }
}

export default App;
