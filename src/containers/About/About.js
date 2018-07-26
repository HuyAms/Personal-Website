import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/ReactAux/ReactAux';
import AboutMe from '../../components/About/AboutMe/AboutMe';
import Hobby from '../../components/About/Hobby/Hobby';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';


class About extends Component {

  componentDidMount() {
    if (!this.props.myInfo) {
      this.props.onFetchInfo();
    }

    this.props.onFetchExp();
  }

  render() {

    let about = this.props.error ?
        <p>Fail to load information</p> : <Spinner/>;

    if (this.props.myInfo && this.props.workExps.length > 0) {
      about = (
          <Aux>
            <AboutMe about={this.props.myInfo.about} workExps={this.props.workExps}/>
            <Hobby hobbies={this.props.myInfo.hobbies}/>
          </Aux>
      )
    }

    return (
        <Aux>
          {about}
        </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    myInfo: state.infoReducer.myInfo,
    loading: state.infoReducer.loading,
    error: state.infoReducer.error,
    workExps: state.infoReducer.workExps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: () => dispatch(actions.fetchInfo()),
    onFetchExp: () => dispatch(actions.fetchExp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);