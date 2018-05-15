import React, {Component} from 'react';
import Aux from '../ReactAux/ReactAux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SocialItems from '../../components/SocialItems/SocialItems';
import classes from './Layout.css'

class Layout extends Component {
  render() {
    return (
        <div className={classes.Body}>
          <header className={classes.Header}>
            <Toolbar/>
            <SocialItems/>
          </header>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </div>
    )
  }
}

export default Layout;