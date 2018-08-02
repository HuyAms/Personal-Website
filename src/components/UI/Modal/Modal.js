import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Aux from '../../../hoc/ReactAux/ReactAux';
import BackDrop from '../BackDrop/BackDrop';
import classes from './Modal.css';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {

    const modal = (
        <Aux>
          <BackDrop clicked={this.props.modalClosed}/>
          <div className={classes.Modal}>
            {this.props.children}
          </div>
        </Aux>
    )

    return ReactDOM.createPortal(
        modal,
        this.el
    )
  }

}

export default Modal;