import React, {Component} from 'react';
import Aux from '../ReactAux/ReactAux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css'

class Layout extends Component {
  render() {
    return (
        <div className={classes.Body}>
          <header className={classes.Header}>
            <Toolbar/>
          </header>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </div>
    )
  }
}

export default Layout;