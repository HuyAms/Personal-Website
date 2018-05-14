import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';

import Aux from './hoc/ReactAux/ReactAux';

class App extends Component {
  render() {
    return (
        <Aux>
          <Layout>
            <Switch>
              <Route path="/skills" component={Skills}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Layout>
        </Aux>
    );
  }
}

export default App;
