import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Helmet from 'react-helmet';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Loadable';
import Contact from './containers/Contact/Loadable';
import MyProjects from './containers/Projects/Loadable';
import About from './containers/About/Loadable';
import Aux from './hoc/ReactAux/ReactAux';

class App extends Component {
    render() {
        return (
            <Aux>
                <Helmet
                    titleTemplate="Huy Trinh - %s"
                    defaultTitle="Huy Trinh - Software Developer"
                >
                    <meta name="description" content="Huy Trinh CV"/>

                </Helmet>
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
