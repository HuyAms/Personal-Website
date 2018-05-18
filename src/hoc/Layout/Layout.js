import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SocialItems from '../../components/Navigation/SocialItems/SocialItems';
import classes from './Layout.css';

class Layout extends Component {
  render() {
    return (
        <div className={classes.Body}>
          <header className={classes.Header}>
            <Toolbar/>
            <SocialItems/>
          </header>
          <main className={classes.Main}>
            {this.props.children}
          </main>
        </div>
    );
  }
}

export default Layout;