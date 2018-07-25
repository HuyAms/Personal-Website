import React, {Component} from 'react';
import classes from './Choices.css';
import onClickOutSide from 'react-onclickoutside';
import Aux from '../../../hoc/ReactAux/ReactAux';

const options = [
  {label: 'All', type: 'all'},
  {label: 'iOS', type: 'ios'},
  {label: 'Android', type: 'android'},
  {label: 'NodeJS', type: 'nodejs'},
  {label: 'React', type: 'react'},
  {label: 'Ionic', type: 'ionic'},
  {label: 'Webapp', type: 'webapp'},

];

class Choices extends Component {

  state = {showMenu: false};

  choiceClass = [classes.Choices]

  handleClickOutside = () => {
    this.setState({showMenu: false});
  };

  toggle = () => {
    this.setState((prevState) => {
      return {showMenu: !prevState.showMenu};
    });
  };

  render() {

    if (this.state.showMenu) {
      this.choiceClass = [classes.Choices, classes.ChoicesActive]
    } else {
      this.choiceClass = [classes.Choices]
    }

    return (
        <div className={classes.ChoicesContainer}
                 onClick={this.toggle}>
          <div className={this.choiceClass.join(' ')}>
            <div className={classes.ChoiceLabel}>{options[this.props.activeFilterIndex].label} Projects ({this.props.numberOfProjects})</div>
            <div className={classes.DropDownIcon}>
              <i className="ion-ios-arrow-down"></i>
            </div>
          </div>

          {
            this.state.showMenu &&
            <ul className={classes.Options}>
              {
                options.map((option, index) => <li className={classes.Option} key={option.type} onClick={() => this.props.clicked(index)}>{option.label}</li>)
              }
            </ul>
          }
        </div>
    );
  }
}

export default onClickOutSide(Choices);