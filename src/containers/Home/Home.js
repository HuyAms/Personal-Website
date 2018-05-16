import React, {Component} from 'react';
import Profile from '../../components/Profile/Profile';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import Aux from '../../hoc/ReactAux/ReactAux';

class Home extends Component {
  render() {
    return (
        <Aux>
          <Profile/>
          <TechnicalSkills/>
        </Aux>
    )
  }
}

export default Home;