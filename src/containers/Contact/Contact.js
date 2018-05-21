import React, {Component} from 'react';
import Contact from '../../components/Contact/Contact';
import PositiveBox from '../../components/PositiveBox/PositiveBox';
import Aux from '../../hoc/ReactAux/ReactAux';

class Contract extends Component {

  render() {
    return (
        <Aux>
          <Contact/>
          <PositiveBox/>
        </Aux>
    );
  }
}

export default Contract;