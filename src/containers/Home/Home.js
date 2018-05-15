import React, {Component} from 'react';
import classes from './Home.css';

class Home extends Component {
  render() {
    return (
        <section className={classes.HomeSection}>
          <h1 className={classes.Name}>Huy Trinh</h1>
          <h2>Mobile developer</h2>
          <p></p>
        </section>
    )
  }
}

export default Home;