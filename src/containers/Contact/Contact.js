import React, {Component} from 'react';
import Contact from '../../components/Contact/Contact';
import PositiveBox from '../../components/PositiveBox/PositiveBox';
import Aux from '../../hoc/ReactAux/ReactAux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Helmet from 'react-helmet';


class Contract extends Component {

  componentDidMount() {
    if (!this.props.myInfo) {
      this.props.onFetchInfo();
    }
  }

  render() {

    let contact = this.props.error ?
        <p>Fail to load information</p> : <Spinner/>;

    if (this.props.myInfo) {
      contact = (
          <Aux>
            <Helmet>
              <title>Contact</title>
              <meta
                  name="description"
                  content="Huy Trinh - Contact Page"
              />
            </Helmet>
            <Contact myInfo={this.props.myInfo}/>
          </Aux>
      );
    }

    return (
        <Aux>
          {contact}
          <PositiveBox/>
        </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    myInfo: state.infoReducer.myInfo,
    loading: state.infoReducer.loading,
    error: state.infoReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchInfo: () => dispatch(actions.fetchInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contract);