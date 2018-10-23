import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/ReactAux/ReactAux';
import AboutMe from '../../components/About/AboutMe/AboutMe';
import Hobby from '../../components/About/Hobby/Hobby';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Helmet from 'react-helmet';


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
            <Helmet>
              <title>AboutMe</title>
              <meta
                  name="description"
                  content="Huy Trinh - AboutMe Page"
              />
            </Helmet>
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
    myInfo: state.infoReducer.get('myInfo'),
    loading: state.infoReducer.get('loading'),
    error: state.infoReducer.get('error'),
    workExps: state.infoReducer.get('workExps')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: () => dispatch(actions.fetchInfoStart()),
    onFetchExp: () => dispatch(actions.fetchExpStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
