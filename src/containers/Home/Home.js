import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from '../../components/Profile/Profile';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import Aux from '../../hoc/ReactAux/ReactAux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Helmet from 'react-helmet';

class Home extends Component {

  componentDidMount() {
    if (!this.props.myInfo) {
      this.props.onFetchInfo();
    }
  }

  render() {

    let home = this.props.error ?
        <p>Fail to load information</p> : <Spinner/>;

    if (this.props.myInfo) {
      home = (
          <Aux>
              <Helmet>
                  <title>Home</title>
                  <meta
                      name="description"
                      content="Huy Trinh - Homepage"
                  />
              </Helmet>
            <Profile myInfo={this.props.myInfo}/>
            <TechnicalSkills/>
          </Aux>
      )
    }

    return (
        <Aux>
          {home}
        </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    myInfo: state.infoReducer.myInfo,
    loading: state.infoReducer.loading,
    error: state.infoReducer.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: () => dispatch(actions.fetchInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);